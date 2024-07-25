import { useState } from "react"
import { useNavigate } from "react-router-dom"

const  ForgotPassword = () => {  
  const navigate= useNavigate();
  const [err,setErr]= useState(false);

    const [form,setForm]= useState({
        email:"",
        password:""
    })  

    const handleChange = (e) => { 
        setForm({ ...form, [e.target.name]: e.target.value }); 
    
    } 
    const handleForgotPassword= async()=>{
        try{
          const res= await fetch("/api/admin/forgotPassword",{ 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        }); 
        if(res.ok){
            const data = await res.json();
            console.log(data);
            alert("pass word change successfully");
            navigate('/login')
        } 
        if(!res.ok){
            setErr(true);
        }

    }catch(err){ 
        console.log(err) 
    }
  }


const handleLoc=()=>{ 
navigate('/signup')

}

  return ( <>
    <div className="flex justify-center items-center h-screen">
    <div className=" p-10  bg-blue-300 rounded-xl">
        <h1 className="text-center p-10 text-2xl font-bold">Password Reset
        </h1>      
       <div className="flex flex-col ">
             <input 
            type="email"
            name="email"
            placeholder="Admin email"
            className="border border-blue-100 p-2 rounded-md text-black mb-5"
            required
            value={form.email}
            onChange={handleChange}
            /> 
            
            <input 
            type="password"
            placeholder="new password"
            className="border border-blue-100 p-2 rounded-md text-black"
            required
            name="password"
            value={form.password} 
            onChange={handleChange}
            />

        </div>  
        <div className='text-center mt-4'><button  onClick={handleForgotPassword} className=' p-2 border bg-green-600 rounded-lg text-white'> Change password </button></div> 
        {err && <div className="text-red-500 text-center">user not found</div>} 

        <button onClick={handleLoc} className="underline text-black font-medium"> clear here to sign in </button>
    </div>
       
        
    </div> 
    
  </>
  )
}

export default ForgotPassword