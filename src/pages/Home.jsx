import { NavLink } from "react-router-dom"
import { Courses } from "./Courses"
import { Contact } from "./Contact"

export const Home = () => {

   
        
        
    return(
        <>
        <div className="home-container h-120 flex  ">
            <div className="w-150">
                <h1 className="text-4xl text-black m-5 p-2">Unlock Your Potential with Expert-Led Courses</h1>
<p className="text-gray text-1xl m-5 ">Join thousands of learners worldwide who are upgrading their skills with high-quality video courses, built by industry experts.</p>
<button className="bg-gray-900 text-white m-5 p-2 rounded-xl"><NavLink>Explore Courses</NavLink></button>

           
 </div>
  <div>
            <img src="../src/assets/learning.png" alt="" className=" shadow-2xl shadow-gray-300 rounded-2xl m-5 " />
        </div>
            
        </div>
       
        <div className="home-blocks">
            <div className="block1">
              
                <Courses/>

            </div>
            <div className="block1">
                <Contact/>
                
            </div><div className="block1">
                
            </div>
        </div>
        
        </>
    )
        
    
}