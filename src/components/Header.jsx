import { NavLink } from "react-router-dom"

export const Header = () => {

    return(
        <div>
              <header className="header flex justify-between items-center h-20  rounded-lg text-white font-Outfit font-medium" >
      <div className="logo m-5 text-2xl text-purple-800" >LearnOnline</div>
      <nav className="nav-links  text-purple-800" >
        <NavLink to="/" className="m-5" >Home</NavLink>
        <NavLink to="/courses" className="m-5">Courses</NavLink>
        <NavLink to="/mycourses" className="m-5" >My Courses</NavLink>
        <NavLink to="/contact" className="m-5">Contact</NavLink>
      </nav>
      <div className="auth-buttons text-purple-800">
        <button className="login m-5" >Login</button>
        <button className="signup m-5">Sign Up</button>
      </div>
    </header>

        </div>
      
    )
}