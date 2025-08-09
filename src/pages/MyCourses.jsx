import { useEffect, useState } from "react"
import { Loader } from "./Loader"
import { NavLink, useNavigate } from "react-router-dom"

export const MyCourses = () => {

    const [myCourse,setMyCourse] = useState([]) 
    const [load,setLoad] = useState(true)
    const navigate = useNavigate()
    const Purchase = async() => {

       try {
         const PurchaseCourses = await fetch("http://localhost:3000/mycourses",{
        method:"GET",
        credentials:"include",
        
    })
    console.log(PurchaseCourses)
    const data = await PurchaseCourses.json()
    console.log(data)
    if(!PurchaseCourses.ok){
        navigate('/login')
    }
    setMyCourse(data)
        
       } catch (error) {
        console.log(error)
       }
       finally{
        setLoad(false)
       }

    }
   useEffect(() => {
    Purchase()
   },[])
   console.log(myCourse)
    return(
        <>
        <h1 className="text-2xl m-3 p-2">Purchased Course</h1>
        <div className="mycourse-container">
            {
                load ? <Loader/> : (
                    <>
                    <ul className="ul-container">
                    {
                        myCourse.map((course,index) =>{
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
                                    <h2>{course.courseTitle.toUpperCase()}</h2>
                                    <p className="text-sm text-slate-400 ">{course.description}</p>
                                    <p className="text-sm mt-1 "><span className="mr-8 ">Rating :{course.rating}  </span><span>Enrolled: {course.enrolled}</span></p>
                                    <p>Price: {course.price}₹</p>
                                    <button className="bg-gray-900 text-white p-2 cursor-pointer "><NavLink to={`/courses/${course.id}/lecture/${index}`}>Start Learning</NavLink></button>
                                    

                                </div>

                                </li>
                                
                                </>
                            )
                        })
                    }

                </ul>
                    </>
                )
            }
        </div>
        </>
    )
}