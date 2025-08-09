import { useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import { MdLock } from "react-icons/md";
import { IoPlay } from "react-icons/io5";
import { toast } from "react-hot-toast"

export const ModuleDisplay = ({courseId,courses,courseLock,data}) => {


    const mycourses = data
    const navigate = useNavigate()
    const [showAccessDenied, setShowAccessDenied] = useState(false);

    console.log(courseLock)
    const [lock,setLock] = useState(courseLock)
    const params = useParams()
    const lecture = courses
    
    
   

    return(

        <>
         <p className="text-2xl m-2">Lectures Modules</p>
            <ul className="m-4">
                {
                    lecture.map((curItem,index) => {

              return(
               <>

                {showAccessDenied && (
                    <div className="fixed top-0 left-0 w-full h-full bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
                      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
                        <h2 className="text-lg font-semibold mb-4">Access Denied</h2>
                        <p className="text-gray-700 mb-4">You need to purchase the course to unlock this module.</p>
                        <button
                          className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
                          onClick={() => setShowAccessDenied(false)}
                        >
                          Close
                        </button>
          </div>
      </div>
)}



  <NavLink className="module m-1 p-2 shadow-2xs flex justify-between cursor-pointer" key={index} to={ `/courses/${courseId}/lecture/${index}`}
                             
  onClick={(e) => {
    if (!lock) {
      e.preventDefault();
      setShowAccessDenied(true);
    }
  }}
                             >
                                
  <span>{curItem.title}</span><span>{lock ?  <IoPlay /> :<MdLock />}</span>
                                

  </NavLink>

  </>
  )})
}
</ul>
         
            
</>
 

)}
        


