import { getAllProducts } from "../controllers/userController.js";
import express from "express";

const userRouter = express.Router(); 

userRouter.get('/getAllProducts',getAllProducts); 

export default userRouter;