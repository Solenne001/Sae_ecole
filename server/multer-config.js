const multer = require("multer")

const storage= multer.diskStorage({
    destination: (req,file,callback)=>{
        callback(null, 'file')
    },
    filename: (req,file,callback)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        callback(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));

    }
})

module.exports = multer({storage: storage}).single("image") 