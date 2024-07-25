import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => { 
    const navigate= useNavigate();

    const [form,setForm]= useState({
        name:"",
        email:"",
        password:""
    }) 
    const handleChange = (e) => { 
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSignup = async() => { 
    try{
        const res = await fetch("/api/admin/createAdmin",{ 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form) 
        
        }); 
        if(res.ok){
            const data = await res.json();
            console.log(data);
            alert("Admin added successfully");
            localStorage.setItem("admin",JSON.stringify(data.adminNew._id));
            navigate('/admin')
    
    } }catch(err){
        console.log(err) 
    
    } }

    const handleloc=()=>{   
   navigate('/login')
    } 
    const handleForgotPassword=()=>{
        navigate('/forgotpassword')
    }



  return( <>
    <div className="flex justify-center items-center h-screen">
    <div className=" p-10  bg-blue-300 rounded-xl">
        <h1 className="text-center p-10 text-2xl font-bold">Admin Signup
        </h1>      
       <div className="flex flex-col ">
             <input  
            name='name'
            value={form.name} 
            onChange={handleChange}
            type="text"
            placeholder="Admin name"
            className="border border-blue-100 p-2 rounded-md text-black mb-5"
            required
            /> 
             <input 
             onChange={handleChange}
             name='email'
             value={form.email}
            type="email"
            placeholder="Admin email"
            className="border border-blue-100 p-2 rounded-md text-black mb-5"
            required

            /> 
            
            <input 
            onChange={handleChange}
            name='password'
            value={form.password}   
            type="password"
            placeholder="Password"
            className="border border-blue-100 p-2 rounded-md text-black"
            required
            />

        </div>  
        <div className='text-center mt-4'><button  onClick={handleSignup} className=' p-2 border bg-green-600 rounded-lg text-white'>  Sign up  </button></div> 

        <button onClick={handleloc} className="underline font-medium mt-3">if already signed up ,login ? </button>
       <div> <button onClick={handleForgotPassword} className="underline font-medium mt-3">forgot password ? </button></div>
    </div>
      
    </div> 
    
  </>
  )
}

export default SignUp