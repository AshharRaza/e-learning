import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { toast } from "react-hot-toast"


export const fetchBackendData = async() => {

        
    
        try {
          
            const res = await fetch('http://localhost:3000/courses',{
              method: 'GET',
              credentials: "include"
            })
            const data = await res.json()
            return data
          

           
            
            
        } catch (error) {
            console.log(error)
            
        }

    }

  export const UploadCourse = async () => {
  try {
    const res = await fetch('http://localhost:3000/admin/manage', {
      method: 'GET',
      credentials: 'include', // ✅ IMPORTANT to send cookies
    });
    console.log(res)
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return data
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

export const LogoutAdmin = async() => {

  try {
const logout = await fetch('http://localhost:3000/admin/logoutadmin',{

  method:"POST",
  credentials:"include"
})
return logout


    
  } catch (error) {
    console.log(error)
  }


}


export const CourseModules = async(courseId) => {



  try {

        const res = await fetch(`http://localhost:3000/courses/${courseId}`,{
              method: 'GET',
              credentials: "include"
        })
           
        const data = await res.json()
        console.log("dataaaaaaaaa",data)
            if(!res.ok){
              toast.success(data.message)
              return res.ok
              // navigate("/login")

            }
        return data
     
        } catch (error) {
            console.log(error)
            
        }

}


export const CourseLock = async(courseId) => {

  try {
    
    const data = await fetch(`http://localhost:3000/access_course/${courseId}`,{
      method:"GET",
      credentials:"include",
    })
    if (data) {
  return data.json({ access: true });
  } else {
  return data.json({ access: false });
  }

  } catch (error) {
    console.log(error)
    
  }

}

export const GetBackComment = async() => {

  try {
    
    const res = await fetch('http://localhost:3000/getcomment',{
      method:'GET'

    })
    const data = await res.json()
    if(res.ok){
      return data
    }
    console.log(data)

  } catch (error) {
    console.log(error)
    
  }
}