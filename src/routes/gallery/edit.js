const router = require('../../common/router');
const passport = require('passport');
const multer = require('multer');

const Gallery = require('../../model/gallery');

router.post(
  '/gallery/edit',
  passport.authenticate('jwt', { session: false }),
  multer().none(),
  async (req, res, next) => {
    try {
      let body = req.body;

      let id = body.id;
      let imageName = body.imageName;

      let galleryData = await Gallery.findOne({ where: { id } });

      if (galleryData) {
        let updateGallery = await galleryData.update({
          imageName,
        });

        if (updateGallery) {
          res.json({ message: 'Image Updated', data: updateGallery });
        }
      }
      else {
        res.json({ error: true, message: 'Image not found' })
      }
    }
    catch (error) {
      res.json({ error: true, message: 'Error Occured' });
    }
  }
);

module.exports = router;