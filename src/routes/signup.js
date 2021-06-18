const router = require('../common/router');
const passport = require('passport');
let multer = require('multer');
const jwt = require('jsonwebtoken');
const Users = require('../model/users');
const bcrypt = require('bcrypt');

let upload = multer();

router.post(
  '/signup',
  upload.none(),
  async (req, res, next) => {
    let oldReq = req;
    passport.authenticate(
      'signup',
      async (err, user, message) => {

        try {
          if (err || !user) {
            return res.json({ error: 'Error Occured', message });
          }

          oldReq.body.password = await bcrypt.hash(user.password, 10);

          let userData = await Users.create({ ...oldReq.body });

          if (userData) {
            const body = { id: userData.id, email: userData.email };
            const token = jwt.sign({ user: body }, process.env.SECRET);

            return res.json({ token });
          }
        }
        catch (error) {
          return next(error);
        }
      }
    )(req, res, next)
  }
);

module.exports = router;