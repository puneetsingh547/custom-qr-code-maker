const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      try {
        if(file.fieldname === 'banner_image'){
          cb(null, 'public/banner/')
        } 
        if(file.fieldname === 'menu_image'){
          cb(null, 'public/menu/')
        } else {
          cb(null, 'uploads/')
        }
      } catch (error) {
        throw error
      }
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
      cb(null, Date.now() + '.' + extension)
    }
  })

const upload = multer({ storage: storage });

module.exports = upload;