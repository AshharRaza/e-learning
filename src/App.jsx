import {  createBrowserRouter, RouterProvider } from "react-router-dom"
import { Applayout } from "./components/Applayout"
import { Home } from "./pages/Home"
import { Courses } from "./pages/Courses"
import { MyCourses } from "./pages/MyCourses"
import { Contact } from "./pages/Contact"
import "./App.css"
import { Lecture } from "./pages/lecture"
import { Admin } from "./components/Admin"

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
          element:<Courses/>
        },
        {
          path:"/mycourses",
          element:<MyCourses/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },{
          path:"/courses/:id",
          element:<Lecture/>

        }

      ]
     
      

    },
     {
        path:"/admin",
      element:<Admin/>

      }
  ])

  return <RouterProvider router={router}/>
  
}

export default App