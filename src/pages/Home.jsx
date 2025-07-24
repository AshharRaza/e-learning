import { NavLink } from "react-router-dom"

export const Home = () => {

   
        
        
    return(
        <>
        <div className="home-container h-140 ">
            <h1 className="text-3xl text-white m-5 p-2">Unlock Your Potential with Expert-Led Courses</h1>
<p className="text-white m-5 ">Join thousands of learners worldwide who are upgrading their skills with high-quality video courses, built by industry experts.</p>
<button className="bg-purple-700 text-white m-5 p-2 rounded-xl"><NavLink>Explore Courses</NavLink></button>

        </div>
        <div className="home-blocks">
            <div className="block1">

            </div>
            <div className="block1">
                
            </div><div className="block1">
                
            </div>
        </div>
        
        </>
    )
        
    
}