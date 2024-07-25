import {coverImageUpload} from '../utils/fileUpload.js';
import express from 'express';
import { uploadBook } from '../controllers/adminController.js';
import { getBooks,deleteBook,editBook } from '../controllers/adminController.js';


const bookRouter = express.Router();   

bookRouter.post('/upload',coverImageUpload,uploadBook);
bookRouter.get('/getBooks',getBooks);
bookRouter.delete('/deleteBook/:id',deleteBook);
bookRouter.put('/editBook/:id',coverImageUpload,editBook);


export  default bookRouter; 
