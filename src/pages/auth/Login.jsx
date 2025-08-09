import { toast } from "react-hot-toast"
import { NavLink, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../components/ContextAuth"

export const Login = () => {
  const [login,setLogin] =  useState()
  const { setUser} = useContext(AuthContext);
  
  const navigate = useNavigate()
    const handleSubmit = async(e) => {

        e.preventDefault()
        const formData = new FormData(e.target)
        
        const data = Object.fromEntries(formData.entries())
        console.log(data)

        try {
          
          const res = await fetch('http://localhost:3000/login',{

            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(data),
            credentials:"include"
          }
        
        )
        setLogin(res.ok)
          console.log(res)
          const loginData = await res.json()
          console.log("LD",loginData)
          if(res.ok){
            setUser(loginData.message)
            toast.success("Login Successful")
            navigate("/courses",{state: {login}})
          }
          else{
            toast.success("Something wrong on email or password")
          }

        } catch (error) {
          console.log(error)
        }

        

    }

    return(
        <div className="p-4 flex items-center justify-center bg-gray-100">
      <form
      
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border-b border-gray-900 "
         
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border-b border-gray-900 "
          
          required
        />
        <p className="p-2">Login as Admin <NavLink to="/adminlogin" className=" text-blue-800 ">Click here</NavLink></p>

        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2  hover:bg-gray-600"
        >
          Login
        </button>
      </form>
    </div>

    )
}