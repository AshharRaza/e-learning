import { NavLink } from "react-router-dom"
import course from "../Data/data.json"
import { useEffect } from "react"
import { useState } from "react"
import { fetchBackendData } from "./fetch"

export const Courses = () => {


    const [courses,setCourses] = useState([])
    
    const fetchData = async() => {

        const data = await fetchBackendData()
        console.log("data",data)
        setCourses(data || [])
    }
    useEffect(() => {

        fetchData()


    },[])
       
       

    
    
    return(
        <>

        <div className="courses">
            
            <div className="courses-dis">
                <h1 className="text-2xl m-3 p-2">Trending Skills to Learn</h1>
                <ul className="ul-container">
                    {
                        courses.map((course) =>{
                            return(
                                <>
                                <li className="li-container">
                                    <div className="img" >
                                    <iframe
  src={`https://drive.google.com/file/d/${course.thumbnail}/preview`}
  width="250"
  height="250"
  allow="autoplay"
/>
                                </div>
                                <div className="disc p-2 m-2">
                                    <h2>{course.courseTitle}</h2>
                                    <p className="text-sm text-slate-400 ">{course.description}</p>
                                    <p className="text-sm mt-1 "><span className="mr-8 ">Rating :{course.rating}  </span><span>Enrolled: {course.enrolled}</span></p>
                                    <p>Price: {course.price}₹</p>
                                    <button className="bg-gray-900 text-white p-2 cursor-pointer "><NavLink to={`/courses/${course.id}`}>Buy Now</NavLink></button>
                                    

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