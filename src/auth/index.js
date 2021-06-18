
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Users = require('../model/users');

passport.use(
  'signup',
  new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
    async (email, password, done) => {
      try {
        let userData = await Users.findOne({ where: { email } });

        if (userData) {
          return done(null, false, { message: 'Email exist' });
        }
        else {
          return done(null, { email, password });
        }
      }
      catch (error) {
        return done(error);
      }
    }
  ));

passport.use(
  'login',
  new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
    async (email, password, done) => {
      try {
        const userData = await Users.findOne({ where: { email } });

        if (!userData) {
          return done(null, false, { message: 'Email does not exist' });
        }

        const passwordValidate = await Users.isValidPassword(password, userData.password);

        if (!passwordValidate) {
          return done(null, false, { message: 'Wrong password' });
        }

        return done(null, userData, { message: 'Login success' });
      }
      catch (error) {
        return done(error);
      }
    }
  ));

passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.SECRET,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken('token')
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      }
      catch (error) {
        return done(error);
      }
    }
  )
)

module.exports = passport;