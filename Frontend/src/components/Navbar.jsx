

const Navbar = () => { 

  const handleLogout = () => { 
  localStorage.removeItem('admin');
  window.location.href="/login";
  }

  return ( <div>
 <div className="flex justify-around items-center p-6  bg-blue-600 text-white font-bold "> 

  <div className="text-3xl ">Admin DashBoard</div>
<button onClick={handleLogout} className="p-1 bg-gray-500 px-3 rounded-lg hover:bg-gray-700">Log out</button>
 </div>
  </div>
   
  )
}

export default Navbar