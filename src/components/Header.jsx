import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"
import { AuthContext } from "./ContextAuth";

export const Header = () => {

   const { user,setUser } = useContext(AuthContext) || [];

  const [isOpen,setIsOpen] = useState(false)
  console.log("user",user)
  const navigate = useNavigate()
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const handleAccount = () => {
   
    navigate("/profile",{state:{user}})
  }

  const handleLogout = async() => {

    const res = await fetch("http://localhost:3000/logout",{
      method:'POST',
      credentials:"include"
    })
    console.log("logout",res)
    if(res.ok){
      toast.success("Logout Success")
      
      navigate("/login")
      setUser(null)
    }
    

  }

    return(
        <div>
              <header className="header flex justify-between items-center h-20  rounded-lg text-white font-Outfit font-medium" >
      <div className="logo m-5 text-2xl text-gray-900" >LearnOnline</div>
      <nav className="nav-links  text-gray-900" >
        <NavLink to="/" className="m-5" >Home</NavLink>
        <NavLink to="/courses" className="m-5">Courses</NavLink>
        <NavLink to="/mycourses" className="m-5" >My Courses</NavLink>
        <NavLink to="/contact" className="m-5">Contact</NavLink>
      </nav>
      <div className="singuptwo">
   

            <button className="m-5 text-gray-900 border rounded-2xl p-2  "><NavLink to="/adminregister">{user ? "Join as Teacher" : "Register as Admin"  }</NavLink></button>

        
        
      </div>
      <div className="auth-buttons text-gray-900 m-4" onClick={toggle}>
        {
          user ?   <div className="relative">
            
       <div
    className="w-10 h-10 bg-gray-900 text-white flex items-center justify-center rounded-full text-lg font-semibold uppercase cursor-pointer"
    title={user.name}
  >
    {user.name?.charAt(0)}
  </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 border z-10">
          <button
           
            className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={handleAccount}
          >
            My Account
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
   :(
          <>
          <button className="login m-5" > <NavLink to="/login">Login</NavLink> </button>
        <button className="signup m-5"> <NavLink to="/register">  Sign Up</NavLink></button>
          </>

        )
        
        }

      </div>
    </header>

        </div>
      
    )
}