const router = require('../../common/router');
const passport = require('passport');
const multer = require('multer');
const fs = require('fs');

const Gallery = require('../../model/gallery');

const appRoot = process.cwd();
const dest = '/public/uploads/gallery/';

router.post(
  '/gallery/delete',
  passport.authenticate('jwt', { session: false }),
  multer().none(),
  async (req, res, next) => {
    try {
      let body = req.body;

      let id = body.id;

      let galleryData = await Gallery.findOne({ where: { id } });

      if (galleryData) {
        let deleteGallery = await Gallery.destroy({ where: { id } });

        if (deleteGallery) {
          fs.unlinkSync(appRoot + dest + galleryData.url);
          fs.unlinkSync(appRoot + dest + 'thumbnail_' + galleryData.url);

          res.json({ message: 'Image Deleted' });
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