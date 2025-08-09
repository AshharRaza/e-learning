import { useEffect } from "react"
import { Sidebar } from "../components/Sidebar"
import { UploadCourse } from "./fetch"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import {LogoutAdmin} from "./fetch"
import { toast } from "react-hot-toast"


export const Manage = () => {

    const [uploaded,setUploaded] = useState()
    const [load,setLoad] = useState(true)

    const formatDate = (date) => {

        const myDate = new Date(date).toLocaleDateString()
        console.log(myDate)
        return myDate

    }

    const UploadCourses = async() => {
       
       
        const res = await UploadCourse() || []
       
        setUploaded(res)
        setLoad(false)

    }

    useEffect(() => {
        UploadCourses()

    },[])

    return(
    
    <>



{
    load ? <h1>Loading....</h1> : (<>
    
    <div className="information ">
    <h1 className="text-2xl p-4">Uploaded Courses</h1>

       { uploaded.map((curCourse) => {

            return(<>
                <div className="info-container flex  m-5 p-3 w-200 shadow-lg bg-gray-200 rounded-2xl shadow-gray-200" key={curCourse.id}>
                    <div className="thumbnail-img">
                         <iframe
  src={`https://drive.google.com/file/d/${curCourse.thumbnail}/preview`}
  width="100"
  height="100"
  allow="autoplay"
/>

                    </div>
                

                
                <div className="info m-2  w-120">
                    <h2>{curCourse.courseTitle.toUpperCase()}</h2>

                    <p>{curCourse.description}</p>
                    <p>Upload On: {formatDate(curCourse.
createdAt)}</p>
                    <p>Price: ₹{curCourse.price}</p>
                </div>
                <div className=" align-bottom align-right ">
                    <button className="p-2 bg-gray-900 text-white m-1"><NavLink>Update</NavLink></button>
                    <button className="p-2 bg-gray-800 text-white m-1"><NavLink>Delete</NavLink></button>
                </div>
                


                </div>
            </>)
        })}
    </div>
    
    </>)
}


    </>)
}

export const AdminLogout = () => {

    const navigate = useNavigate()

    const LogotAd = async() => {

        const logoutData = await LogoutAdmin()
    console.log("res",logoutData)
        if(logoutData.ok){

            navigate("/adminlogin")
            
        }

    }
    useEffect(() => {
        LogotAd()
    })
    
   
}