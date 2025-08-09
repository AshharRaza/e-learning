import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";

export const VideoPreview = ({videoPreview}) => {

    const [videoUpload, setVideoUpload] = useState(videoPreview || [])

    useEffect(() => {

        setVideoUpload(videoPreview || [])
    },[videoPreview])

    
    const handleDelete = (videoIndex) => {

        
     
        const handleFilterVideo = videoUpload.filter((curVideo,index) => index !== videoIndex) 
        setVideoUpload(handleFilterVideo)
       
        
    }
   

    return(
        <>
        {videoUpload.length > 0 && (
  <div className="  mt-6">

    {videoUpload.map((video, index) => (
        
      <div key={index} className="bg-gray-300 text-white rounded  flex w-130 m-3">
        <ImCross className="m-2 text-black text-sm" onClick={() => handleDelete(index) }/>
        <div className="video text-white">
        <video src={video.url} controls className=" w-50 h-20 rounded m-2"  />


        </div>
        <div className="dis">
        <h3 className="font-semibold mb-2 text-white">Lecture {index + 1}</h3>
       
        
        

        </div>

      </div>
    ))}
  </div>
)}
        </>
    )
}