
import book from "../models/bookSchema.js";
import admin from "../models/adminSchema.js";
import jwt from "jsonwebtoken";


export const uploadBook= (async (req, res) => {
    try { 
        console.log(req.body);
        const { name, description, price, author, language, publishedYear } = req.body;
        
        const coverImage = req.file ? req.file.path : '';
    
        const newBook = new book({
          name,
          description,
          price: parseFloat(price),
          author,
          language,
          publishedYear,
          coverImage:req.file.path
        });
    
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
      } catch (error) {
        res.status(400).json({ message: error.message });
      } }) ;
 
export const getBooks = async (req, res) => { 
    try {
      const books = await book.find({});
      res.status(200).json(books);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  export const deleteBook = (async (req, res) => {  
    try {
      const bookId = req.params.id;
      const deletedBook = await book.findByIdAndDelete(bookId);
      res.status(200).json(deletedBook);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }); 

  export const editBook = (async (req, res) => { 
    try {
      const bookId = req.params.id;
      const { name, description, price, author, language, publishedYear } = req.body;
      const updateData = { name, description, price, author, language, publishedYear };
      if(req.file){
        updateData.coverImage = req.file.path;
      }
      const updatedBook =   await book.updateOne({_id: bookId}, { $set: updateData }); 
        res.status(200).json(updatedBook);
} catch (error) { 
    res.status(404).json({ message: error.message });
}   }); 


export const signup= async(req,res)=>{  
    try { 
      
        const {name ,email,password}=req.body;
        const newAdmin = new admin({
            name,
            email,
            password
        });
       const adminNew= await newAdmin.save();
        const token = jwt.sign({email:adminNew.email,id:adminNew._id},process.env.JWT_SECRET); 
            res.cookie('adminToken',
                token , { 
                    httpOnly:true,
                    secure: false,
                    sameSite: 'none',
                    expires : new Date(Date.now() + 1000*60*60*24*7)

                }
            ).status(200).json({adminNew,token});
    }catch(error){ 
      console.log(error);
        res.status(400).json({ message: error.message });

    }
}

export const signin = async(req,res)=>{
    try {
        const {email,password}=req.body;
        const adminData = await admin.findOne({email:email});
        if(adminData && adminData.password===password){
            const token = jwt.sign({email:adminData.email,id:adminData._id},process.env.JWT_SECRET); 
            res.cookie('adminToken',
                token , { 
                    httpOnly:true,
                    secure: false,
                    sameSite: 'none',
                    expires : new Date(Date.now() + 1000*60*60*24*7)

                }
            ).status(200).json({adminData,token});

        } 
        else{
            res.status(400).json({ message: "Invalid credentials" });
        }
    }catch(error){
        res.status(400).json({ message: error.message });

    }
}

export const changePassword = async(req,res)=>{
    try {
        const {email,password,password2}=req.body;
        const adminData = await admin.updateOne({email:email}, { $set: { password: password } });
        res.status(200).json(adminData);
        
    }catch(error){  
        res.status(400).json({ message: error.message });

    } }   