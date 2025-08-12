import { NavLink } from "react-router-dom"
import "../App.css"
import { useEffect, useState } from "react"
export const Sidebar = () => {

const [adminLog, setAdminLog] = useState(null)
const RequsetAdmin = async() => {

    try {
         const res = await fetch('http://localhost:3000/requestadmin',{
            method:'GET',
            credentials:"include"
        })
            if(res.ok){
                const data = await res.json()
                console.log(data)
                setAdminLog(data)

            }
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        RequsetAdmin()

    },[])
              



    return(
        <>
        <div className="sidebar bg-white text-black   " >
                <h1 className="text-3xl m-2 text-black p-2">Dashboard</h1>
                
   
        <div className="w-20 h-20 ml-15 bg-gray-900 text-white flex items-center justify-center rounded-full text-lg font-semibold uppercase">
            {
                adminLog?.name?.charAt(0)
            }
        </div>
  
                <NavLink to="/admin" className="m-2 p-2 text-black bg-gray-300 rounded-2xl">Dashboard</NavLink>
                <NavLink to="/admin/manage" className="m-2 p-2 text-black bg-gray-300 rounded-2xl">Manage</NavLink>
              
                <NavLink to="" className="m-2 p-2 text-black bg-gray-300 rounded-2xl">Payment</NavLink>
                <NavLink to="/admin/adminlogout" className="m-2 p-2 text-black bg-gray-300  rounded-2xl">Logout</NavLink>



            </div>
        </>
    )
}