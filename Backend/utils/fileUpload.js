import multer from "multer";



import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // Get file path
const __dirname = path.dirname(__filename);
const newPath= __dirname.replace("utils","Public"); 
console.log(newPath);
const storage = multer.diskStorage({
    destination: (req, file, cb) => { 
      if (file.fieldname == "coverImage") {
        cb(null, path.join(newPath, 'coverImages'));
 
      } else {
        cb(new Error("Unexpected field"));
      }
    },

    filename: (req, file, cb) => {
        cb( 
          null,
          file.originalname 
        );
      },
    }); 

    export const coverImageUpload = multer({ storage: storage }).single(
        "coverImage"
      );
      