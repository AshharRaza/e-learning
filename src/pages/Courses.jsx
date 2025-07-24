import { NavLink } from "react-router-dom"
import course from "../Data/data.json"

export const Courses = () => {

    
    
    return(
        <>

        <div className="courses">
            
            <div className="courses-dis">
                <ul className="ul-container">
                    {
                        course.map((course) =>{
                            return(
                                <>
                                <li className="li-container">
                                    <div className="img">
                                    <img src={course.image} alt="" />

                                </div>
                                <div className="disc p-2 m-2">
                                    <h2>{course.title}</h2>
                                    <p className="text-sm text-slate-400 ">{course.description}</p>
                                    <p className="text-sm mt-1 "><span className="mr-8 ">Rating :{course.rating}  </span><span>Enrolled: {course.enrolled}</span></p>
                                    <p>Price: {course.price}₹</p>
                                    <button className="bg-purple-700 text-white p-2 cursor-pointer "><NavLink to={`/courses/${course.id}`}>Buy Now</NavLink></button>
                                    

                                </div>

                                </li>
                                
                                </>
                            )
                        })
                    }

                </ul>
            </div>
        </div>
          </>
    
    )
}