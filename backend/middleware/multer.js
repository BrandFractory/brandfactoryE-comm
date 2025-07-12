import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

// Create Cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "upload",
        allowed_formats: ["jpg", "jpeg", "png", "gif"],
    },
});

const upload = multer({ storage });

export default upload;