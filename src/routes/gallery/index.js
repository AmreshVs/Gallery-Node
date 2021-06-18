const router = require('../../common/router');
const passport = require('passport');
const multer = require('multer');
const Gallery = require('../../model/gallery');

router.get(
  '/gallery',
  passport.authenticate('jwt', { session: false }),
  multer().none(),
  async (req, res) => {
    try {
      const gallery = await Gallery.findAll({
        where: {
          createdBy: req.user.id
        },
        order: [
          ['createdAt', 'DESC']
        ],
      });

      res.json({ data: gallery })
    }
    catch (error) {
      res.send({ error: true, message: 'Error Occured' });
    }
  });

module.exports = router;