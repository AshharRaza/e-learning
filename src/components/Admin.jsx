import { useEffect, useState } from "react"
import {  NavLink } from "react-router-dom"
import { Sidebar } from "./Sidebar"

export const Admin = () => {

  const [course,setCourse] = useState([])
  const [videoPreview, setVideoPreview ] = useState([])
  const [handleUpload, sethandleUpload] = useState(false)
  const [subLecture,setSubLecture] = useState({
    lectureTitle: '',
    lectureDes: '',
  })
  const [titleDes,settitleDes] = useState([])

 const handleSubmit = (e) => {
   e.preventDefault()
    const formData = new FormData(e.target)

    const title = formData.get("title")
    const discription = formData.get("description")
    const category = formData.get("category")
    const price = formData.get("price")
    
    // setCourse(video)
   if (!title || !discription || !category || !videoPreview.length) {
    alert("Please fill all required fields and upload videos.");
    return;
  }

  const newCourse = { title, discription, category, price, videoPreview, titleDes };

  setCourse(prev => [...prev, newCourse]);

  // Optional: reset form
  e.target.reset();
  console.log("Course added:", newCourse);

    


    }


    const handleVideo = (e) => {
  const videoFiles = Array.from(e.target.files);
  const previewUrls = videoFiles.map(file => ({
    file,
    url: URL.createObjectURL(file),
  }));
  setVideoPreview(prev => [...prev, ...previewUrls]);// correct state update
};




const handleUploadLecture = (e) => {
  e.preventDefault()
  sethandleUpload(true)

}

const handleAddbtn = (e) => {
  e.preventDefault()
  sethandleUpload(false)
  console.log(subLecture.lectureDes, subLecture.lectureTitle)
  settitleDes((prev) =>[ ...prev, subLecture])
  console.log(videoPreview)

console.log(titleDes)
 
}

const handleSubLectureChange = (e) => {
  const { name, value } = e.target;
  setSubLecture(prev => ({
    ...prev,
    [name === 'title' ? 'lectureTitle' : 'lectureDes']: value,
  }));
};


    return(
        <div className="dashboard ">
            <Sidebar/>
            <div className="dashboard-content text-black">
                <div className="input-container text-black">
                    <h1 className="text-3xl m-2">Upload Your New Course</h1>
                   <form  className="bg-white p-6 rounded-lg shadow-lg m-4  max-w-xl  " onSubmit={handleSubmit}>
       
       
       
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Course Title</label>
          <input
            type="text"
            name="title"
          
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            name="description"
            
            className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none"
          ></textarea>
        </div>
        <button
          
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded" onClick={handleUploadLecture}
        >
          Upload Lectures
        </button>
        <div className="lec">
          {
            handleUpload && <div className="shadow-2xl p-2">

              <div className="mb-4">
          <label className="block mb-1 font-semibold">Upload Video</label>
          <input
            type="file"
            accept="video/*"
            name="videos"
            multiple
            required
            className="w-full"
            onChange={handleVideo}
          />
        </div>
              <div className="mb-4">
          <label className="block mb-1 font-semibold">Lecture Title</label>
         <input
  type="text"
  name="title"
  value={subLecture.lectureTitle}
  required
  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
  onChange={handleSubLectureChange}
/>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">LectureDescription</label>
         <textarea
  name="description"
  value={subLecture.lectureDes}
  className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none"
  onChange={handleSubLectureChange}
/>
        </div>
         <button
          
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded" onClick={handleAddbtn}
        >
          Add Video
        </button>
            </div>
          }
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Category</label>
          <input
            type="text"
            name="category"
           
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Price (Optional)</label>
          <input
            type="number"
            name="price"
           
            
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
        </div>

        

        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded"
        >
          Upload
        </button>
      </form>

     

                </div>

            </div>

            <div className="video-uploaded">
{videoPreview.length > 0 && (
  <div className="  mt-6">
    {videoPreview.map((video, index) => (
      <div key={index} className="bg-gray-600 text-white rounded  flex w-130 m-3">
        <div className="video text-white">
        <video src={video.url} controls className=" w-50 h-20 rounded m-2" />


        </div>
        <div className="dis">
        <h3 className="font-semibold mb-2 text-white">Lecture {index + 1}</h3>
        

        </div>

      </div>
    ))}
  </div>
)}
            </div>
        </div>
    )
}