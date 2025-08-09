import { useEffect, useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import Data from "../Data/data.json"
import { Loader } from "./Loader"
import { MdRateReview } from "react-icons/md";
import { MdOutlineComment } from "react-icons/md";
import { LuNotebookText } from "react-icons/lu";
import { CourseLock, CourseModules, fetchBackendData, GetBackComment } from "./fetch";
import ReactPlayer from "react-player";
import { ModuleDisplay } from "../components/videoDisplay";
import { toast } from "react-hot-toast"
import { Comments } from "../components/Comments";


export const Lecture = () => {

    const [data,setData] = useState([])
    const params = useParams()
    const [load,setLoad] = useState(true)
    const [lock,setLock] = useState()
    const [comment,setComment] = useState()
    
    const id = params.courseId


    
    const [courses,setCourses] = useState([])

    const navigate = useNavigate()

 
   

    const fetchData = async() => {


        try {

            
            const purchaseCourse = await CourseLock(id)
            console.log("purchase",purchaseCourse)
            setLock(purchaseCourse)
            const getComments = await GetBackComment()
            console.log("get",getComments)
            setComment(getComments)
            

            const fetchDataBack = await CourseModules(id) 
           
            console.log("data",fetchDataBack)
            
            const filterData = fetchDataBack.find((item) => item.id.toString() === params.courseId)
           
            setData(filterData)
              
            setCourses(filterData.videoPreview )
        

         

            
            
            
        } catch (error) {
            toast.success("Please Login")
            navigate("/login")
            
        }
        finally{
            setLoad(false)
           
        }

    }
            console.log("dads",data)
    
      useEffect(() => {
   
    fetchData()
  }, [])
    
  


  const paymentPage = () => {
    navigate(`/courses/${id}/buynow`,{state: {data}})
  }

  

  const CoursePage = () => {
    navigate(`/courses/${id}/lecture/:id`)

  }


    return(
        <>
        <div className="lecture-container ">
            {
                load ? <Loader/> : <>
                {
                    courses.length > 0 && (
                        <>
                        <div className="video-lecture w-220 h-190 m-4">
                { <iframe
  width="95%"
  height="400"
  src={`https://drive.google.com/file/d/${courses[0].videoPreview.split("/")[5]}/preview`}
  title="YouTube video"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
></iframe> 

}


<div className="info flex justify-between">

<div>
    <h1 className="text-3xl">{courses[0].title.toUpperCase()}</h1>
            <p className="text-sm text-gray-600">{courses[0].description}</p>
           

</div>
<div className="flex text-center ">
               <span className="text-3xl m-2 cursor-pointer" > <MdOutlineComment /></span>
                <span  className="text-3xl m-2 cursor-pointer"><LuNotebookText /> </span>
</div>
            
            
        
    
</div>
<div className="reviews m-3">
      
    <div className="head flex">
         <h1 className="text-3xl">Learners Review</h1>

    </div>
 
         

<div className="reviews flex ">
    {
       
        comment.map((curReview) => {

            return(
                <div className="w-50 h-30 m-2 p-2 bg-gray-300 ">
<MdRateReview className="size-5" />

                <h2>{curReview.text}</h2>
                
               </div>
            )
        })
    }
</div>
    
</div>


            </div>
            <div className="lecture-modules bg-gray-300 w-100 rounded-4xl shadow-5xl m-2 ">
               <ModuleDisplay courseId = {id} courses={courses}  courseLock = {lock} data = {data}/>

               <div className="btn">
                {
                    lock ?  <button className="m-4 p-2 w-90 bg-gray-900 text-white cursor-pointer" onClick={CoursePage}>
                Let's Learn
                </button> :<button className="m-4 p-2 w-90 bg-gray-900 text-white cursor-pointer" onClick={paymentPage}>
                Buy Now
                </button>
                }
               </div>
            
                </div>
                        </>
                    )
                }
                
                </>
            
            

            

            }
            
        
        </div>
        
        </>
    )
}