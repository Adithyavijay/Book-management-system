import express from 'express';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes.js';
import path from 'path';
import { fileURLToPath } from "url";
import userRoutes from './routes/userRouter.js';
import adminRoutes from './routes/adminRouter.js';
import { notFound, errorHandler } from './middlewares/errorHandler.js';

dotenv.config();
import connectDb from './config/db.js'; 
connectDb();
import cors from 'cors';

const app = express() ;

app.use(express.json({ limit: '50mb' })); // Adjust the limit as needed
app.use(express.urlencoded({ extended: true, limit: '50mb' })); 
const __filename = fileURLToPath(import.meta.url); // Get file path
const __dirname = path.dirname(__filename);
app.use('/Public',express.static(path.join(__dirname, 'Public')));
const port = 3000;  
app.use(cors());


app.use('/api/books', bookRoutes); 
app.use('/api', userRoutes);
app.use('/api/admin',adminRoutes);
app.use(notFound)
app.use(errorHandler)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});