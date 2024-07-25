import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {  
  const navigate= useNavigate();
  const [err,setErr]= useState(false);

    const [form,setForm]= useState({
        email:"",
        password:""
    })  

    const handleChange = (e) => { 
        setForm({ ...form, [e.target.name]: e.target.value }); 
    
    } 
    const handleLogin= async()=>{
        try{
          const res= await fetch("/api/admin/signin",{ 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        }); 
        if(res.ok){
            const data = await res.json();
            console.log(data.adminData);
            alert("Admin login successfully");
            localStorage.setItem("admin",JSON.stringify(data.adminData._id));
            navigate('/admin')
        } 
        if(!res.ok){
            setErr(true);
        }

    }catch(err){ 
        console.log(err) 
    }
  }

const handleloc=()=>{ 
    navigate('/signup')
}
const handleForgotPassword = () => { 
    navigate('/forgotpassword') 
}
  return ( <>
    <div className="flex justify-center items-center h-screen">
    <div className=" p-10  bg-blue-300 rounded-xl">
        <h1 className="text-center p-10 text-2xl font-bold">Admin login  
        </h1>      
       <div className="flex flex-col ">
             <input 
            type="email"
            name="email"
            placeholder="Admin name"
            className="border border-blue-100 p-2 rounded-md text-black mb-5"
            required
            value={form.email}
            onChange={handleChange}
            /> 
            
            <input 
            type="password"
            placeholder="Password"
            className="border border-blue-100 p-2 rounded-md text-black"
            required
            name="password"
            value={form.password} 
            onChange={handleChange}
            />

        </div>  
        <div className='text-center mt-4'><button  onClick={handleLogin} className=' p-2 border bg-green-600 rounded-lg text-white'>  Login </button></div> 
        {err && <div className="text-red-500 text-center">Invalid credentials</div>} 

        <button onClick={handleloc} className="underline text-black font-medium"> if not signed in , signup ?</button>
        <div> <button onClick={handleForgotPassword} className="underline font-medium mt-3">forgot password ? </button></div>
    </div>
       
   
    </div> 
    
  </>
  )
}

export default LoginPage