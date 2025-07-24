import { NavLink } from "react-router-dom"

export const ContentPage = () => {

    return(
        <>
        <h1>Unlock Your Potential with Expert-Led Courses</h1>
<p>Join thousands of learners worldwide who are upgrading their skills with high-quality video courses, built by industry experts.</p>
<NavLink to="/courses" class="btn">Browse Courses</NavLink>
        </>
    )
}