import { RouterProvider, createBrowserRouter  } from "react-router-dom";
import AdminDashboard from "./Pages/AdminDashboard";
import LoginPage from "./Pages/LoginPage";
import Homepage from "./Pages/Homepage";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";

  
  const router = createBrowserRouter([ 

    {
      path : '/',
      element : <Homepage/>
    },
    { 
      path: "/admin",
      element: <AdminDashboard/>,
    }, 
    {
      path : '/login',
      element : <LoginPage/>
    },
    {
      path : '/signup',
      element : <SignUp/>
    },
    
    {
      path : '/forgotpassword',
      element : <ForgotPassword/>
    },
    

  
  ]);

  export default function App() { 
    return (
      <RouterProvider router={router} />
    
    );
  }   