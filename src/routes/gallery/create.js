const router = require('../../common/router');
const passport = require('passport');
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');

const Gallery = require('../../model/gallery');

const appRoot = process.cwd();
const dest = 'public/uploads/gallery';

// Specifying the storage path
const storage = multer.diskStorage({
  destination: function (req, file, next) {
    next(null, dest);
  },
  filename: function (req, file, next) {
    let filePath = appRoot + '/' + dest + '/' + file.originalname;
    fs.access(
      filePath,
      fs.constants.F_OK,
      (err) => {
        if (err) {
          next(null, file.originalname);
        } else {
          next(new Error('Image already exist'));
        }
      }
    );

  }
});

const upload = multer({ storage: storage });
let singleImage = upload.single("image");

router.post(
  '/gallery/create',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    singleImage(req, res, (err) => {
      if (!err) {
        const file = req.file;

        sharp(file.path).resize(200, 200).toFile(
          dest + '/thumbnail_' + file.originalname,
          (err, resizedImage) => {
            if (err) {
              next(err);
            }

            if (!file) {
              res.status(401).json({ error: true, message: 'Please add file!' });
            }
            else {
              try {
                Gallery.create({
                  imageName: file.filename,
                  url: file.originalname,
                  createdBy: req.user.id
                });

                res.json({ message: 'Image uploaded' });
              }
              catch (error) {
                console.log('Error Occured', error);
              }
            }
          }
        )
      }
      else {
        res.json({ error: true, message: err.message });
      }
    });


  }
);

module.exports = router;