import express from 'express';
import { signup, signin, changePassword } from '../controllers/adminController.js';

const adminRouter = express.Router();   

adminRouter.post('/createAdmin',signup); 
adminRouter.post('/signin',signin); 
adminRouter.post('/forgotPassword',changePassword);

export default adminRouter;