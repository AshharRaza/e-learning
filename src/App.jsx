import {  createBrowserRouter, RouterProvider } from "react-router-dom"
import { Applayout } from "./components/Applayout"
import { Home } from "./pages/Home"
import { Courses } from "./pages/Courses"
import { MyCourses } from "./pages/MyCourses"
import { Contact } from "./pages/Contact"
import "./App.css"
import { Lecture } from "./pages/lecture"
import { Admin } from "./components/Admin"
import { LecturePage } from "./pages/LecturePage"
import { Login } from "./pages/auth/Login"
import { Register } from "./pages/auth/Register"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminSignUp } from "./pages/auth/AdminSignup"
import { AdminLogin } from "./pages/auth/AdminLogin"
import { AdminLogout, Manage } from "./pages/Manage"
import { SidebarLayout } from "./components/SidebarLayout"
import { PaymentPage } from "./pages/auth/Payment"
import { AuthProvider } from "./components/ContextAuth"
import { Profile } from "./pages/Profile"
import {Toaster} from "react-hot-toast"



const App = () => {



  const router = createBrowserRouter([
    {
      path:"/",
      element:<Applayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        }
        ,{
          path:"/courses",
          element:<Courses/>,

        },
        {
          path:"/mycourses",
          element:<MyCourses/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },{
          path:"/courses/:courseId",
          element:<Lecture/>,
          

        },
        {
          path:"/courses/:id/buynow",
          element:<PaymentPage/>,
          

        },
         {
          path:"/courses/:id/lecture/:lectureId",
          element: <LecturePage/>
        },{
          path:"/login",
          element:<Login/>
        }
        ,{
          path:"/register",
          element:<Register/>
        }
        ,{
          path:"/profile",
          element:<Profile/>
        },{
        path:"/adminlogin",
      element:<AdminLogin/>

      },
        {
        path:"/adminregister",
      element:<AdminSignUp/>

      }
       

      ]
     
      

    },
    {
      path:"/admin",
      element:<SidebarLayout/>,
      children:[
        {
          index:true,
          element:<Admin/>,
      },
    {
      path:"manage",
      element: <Manage/>
    },{
      path:"adminlogout",
      element: <AdminLogout/>
    }
    
    ]
    },

    
  
     
     
   

    
  ])

  return (<>
  <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1f1f1f", // Dark gray
            color: "#fff", // White text
            borderRadius: "8px",
            padding: "12px",
          },
        }}
      />
  <AuthProvider>

    

  <RouterProvider router={router}/>


 

  </AuthProvider>
  
  </>
  
  )

  
  
}

export default App