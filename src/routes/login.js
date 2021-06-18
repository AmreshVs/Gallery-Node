const router = require('../common/router');

const multer = require('multer');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const upload = multer();

router.post(
  '/login',
  upload.none(),
  async (req, res, next) => {
    passport.authenticate(
      'login',
      async (err, user, message) => {

        try {
          if (err || !user) {
            return res.json({ error: 'Error Occured', ...message });
          }

          req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              const body = { id: user.id, email: user.email };
              const token = jwt.sign({ user: body }, process.env.SECRET);

              return res.json({ token });
            }
          )
        }
        catch (error) {
          return next(error);
        }
      }
    )(req, res, next)
  }
);

module.exports = router;