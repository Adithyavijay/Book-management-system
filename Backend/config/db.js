import mongoose from "mongoose";

     const connectDb=async()=>{

        try{
            const conn = await mongoose.connect(process.env.MONGO_URI)
            console.log(`mongoose conntected`)

        }catch(error){
            console.log(error.message)
            process.exit(1)
        }
     }
     export default connectDb  