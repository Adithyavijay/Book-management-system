import { catchError } from "rxjs";
import book from "../models/bookSchema.js";
import e from "express";

export const getAllProducts = async (req, res) => { 
    try { 
        console.log("fetch")
        const books = await book.find({});
       console.log(books)
        res.status(200).json(books);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }

}