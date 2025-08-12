import { useEffect, useState } from "react"
import {  NavLink, useNavigate } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { VideoPreview } from "./videoPreview"
import { UploadVideo } from "./UploadVideo"
import { toast } from "react-hot-toast"


export const Admin = () => {
  const navigate = useNavigate()
  const [course,setCourse] = useState([])
  const [videoPreview, setVideoPreview ] = useState([])
  const [handleUpload, sethandleUpload] = useState(false)
  const [addFormLecture, setAddFormLecture] = useState()
  const [titleDes,settitleDes] = useState([])
  
  

 const handleSubmit = async(e) => {
   e.preventDefault()
    const formData = new FormData(e.target)
    const thumbnail = formData.get("thumbnail").split("/")[5]


    const title = formData.get("title")
    const discription = formData.get("description")
    const category = formData.get("category")
    const price = formData.get("price")
    const img = formData.get(`thumbnail`)

    const author = formData.get("author")
   
    
    
    
    // setCourse(video)
   if (!thumbnail || !title || !discription || !category || !addFormLecture || !img || !author) {
    alert("Please fill all required fields and upload videos.");
    return;
  }

  const newCourse = {thumbnail, title, discription, category, price, addFormLecture,author };

  setCourse(prev => [...prev, newCourse]);

  
  e.target.reset();


  try {
  const response =  await fetch("http://localhost:3000/admin",{      //frontend Data Transfer

    method:'POST',
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(newCourse),
    credentials: "include",


    
  }

  );
  const data = await response.json();

  if(data){
  toast.success(data.error)
  navigate("/adminlogin")
  }

  
  } catch (error) {
    console.log(error)
  }

    setVideoPreview('')

  }
   



  

const handleUploadLecture = (e) => {
  e.preventDefault()
  sethandleUpload(true)

}

const formLectureData = (data) => {
  setAddFormLecture(data)
}




return(
    <div className="dashboard ">
          
      <div className="dashboard-content text-black  justify-center center">
        <div className="input-container text-black w-250 rounded-2xl m-10 shadow-2xl border-2-gray bg-gray-200  ">
          <h1 className="text-3xl m-2 p-4">Upload Your New Course</h1>
            <form  className="bg-white p-6 rounded-lg shadow-lg m-4     " onSubmit={handleSubmit}>
       
        <div className="mb-4">
        <label className="block mb-1 font-semibold">Thumbnail URL</label>
        <input
          type="text"
          name="thumbnail"
          placeholder="Enter image URL (e.g., from Google Drive or Imgur)"
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
        />
</div>

       
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

         <div className="mb-4">
          <label className="block mb-1 font-semibold">Author Name</label>
          <input
            type="text"
            name="author"
          
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
        </div>

        <button
          
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded" onClick={handleUploadLecture}
        >
          Upload Lectures
        </button>
        <div>
          {
            handleUpload &&  
        <UploadVideo AddLecture = {formLectureData} />

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

            
        </div>
    )
}