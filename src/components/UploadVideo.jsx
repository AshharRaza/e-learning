import { useEffect, useState } from "react"

export const UploadVideo = ({AddLecture}) => {

    const [lecture, setLecture] = useState([])
    const [uploadLecture, setUploadLecture] = useState({
        videoPreview: '',
        title:'',
        description:''


    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setUploadLecture((prev) => ({...prev,[name]:value}))
       
    }
    const handleAdd = (e) => {

        e.preventDefault()
       
        
       const newLectures = [...lecture, uploadLecture];
        setLecture(newLectures)
        AddLecture(newLectures);

    }
  


    return(
        
        
         <div className="shadow-2xl p-2" >

          <div className="mb-4">
  <label className="block mb-1 font-semibold">Video Preview URL</label>
  <input
    type="text"
    name="videoPreview"
    placeholder="Enter video URL (e.g., Google Drive or YouTube embed)"
    required
    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
    value={uploadLecture.videoPreview}
    onChange={handleChange}
  />
</div>
              <div className="mb-4">
          <label className="block mb-1 font-semibold">Lecture Title</label>
         <input
  type="text"
  name="title"
 
  required
  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
   value={uploadLecture.title}
    onChange={handleChange}
 
/>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Lecture Description</label>
         <textarea
  name="description"
 
  className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none"
   value={uploadLecture.description}
   onChange={handleChange}

/>
        </div>
         <button
          
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded"
          onClick={handleAdd}
        >
          Add Video
        </button>
            </div>
          
       
       
    )
}