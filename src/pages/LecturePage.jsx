
import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import Data from "../Data/data.json"
import { Loader } from "./Loader"
import { MdRateReview } from "react-icons/md";
import { MdOutlineComment } from "react-icons/md";
import { LuNotebookText } from "react-icons/lu";
import { fetchBackendData} from "./fetch";
import ReactPlayer from "react-player";
import { ModuleDisplay } from "../components/videoDisplay";
import { Comments } from "../components/Comments";


export const  LecturePage = () => {

const [lectureData, setLectureData] = useState()
const [completeCourse, setCompleteCourse] = useState()
const [lock,setLock] = useState()
const params = useParams()
console.log("ID,",params)
const id = params.id
console.log("courseId",id)
console.log(params.id)
    const [load,setLoad] = useState(true)
        const [comment,setComment] = useState(false)
    
  

    const fetchBackData = async() => {
        try {

        const data = await fetchBackendData()
        const courseId = data.filter((cur) => cur.id == params.id)
        
        console.log("ci",courseId)
        const lecture = courseId[0].videoPreview
        console.log("data",lecture)
        setCompleteCourse(lecture)
        const filterData =  courseId[0].videoPreview.filter((curLec,index) => index == params.lectureId )
        setLectureData(filterData)

           

            
        } catch (error) {
            console.log(error)
        }
        finally
        {
            setLoad(false)
        }
    }
    useEffect(() => {

        fetchBackData()
    },[params.lectureId])
   
    console.log(lectureData)

    const handleCommentBox = () => {
    setComment(!comment)
  }
    return(
        <>
          <div className="lecture-container ">
            {
                load ? <Loader/> : <>
                <div className="video-lecture w-220 h-150 m-4">
                { <iframe
  width="100%"
  height="400"
  src={`https://drive.google.com/file/d/${lectureData[0].videoPreview.split("/")[5]}/preview`}
  title="YouTube video"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
></iframe> 

}


<div className="info flex justify-between">

<div>
    <h1 className="text-3xl">{lectureData[0].title.toUpperCase()}</h1>
            <p className="text-sm text-gray-600">{lectureData[0].description}</p>
            {/* <p className="text-purple-500">Rating: {data.rating}</p> */}

</div>
<div className="flex text-center ">
               <span className="text-3xl m-2 cursor-pointer"> <MdOutlineComment onClick={handleCommentBox} /></span>
                <span  className="text-3xl m-2 cursor-pointer"><LuNotebookText /> </span>
</div>
            
            
        
    
</div>
<div className="reviews m-3 ">
     <div className="commentbox ">
    {
        comment && <Comments />
    }
</div>
    
    
</div>


</div>
    <div className="lecture-modules bg-gray-300 w-100 rounded-4xl shadow-5xl m-2 ">
        <ModuleDisplay courseId = {id} courses={completeCourse} courseLock={true}/>
            
</div>
</>
    
}
      
</div>
 </>
)
}