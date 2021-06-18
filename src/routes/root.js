let router = require('../common/router');
let multer = require('multer');

let upload = multer();

router.get('/', upload.none(), (req, res) => {
  res.send('Gallery API Server is running');
});

module.exports = router;