import { NavLink } from "react-router-dom"

export const Sidebar = () => {

    return(
        <>
        <div className="sidebar bg-gray-900 " >
                <h1 className="text-3xl m-2 p-2">Dashboard</h1>
                <NavLink to="/admin" className="m-2 p-2 bg-gray-800 rounded-2xl">Dashboard</NavLink>
                <NavLink to="/admin" className="m-2 p-2 bg-gray-800 rounded-2xl">Manage</NavLink>
                <NavLink to="/admin" className="m-2 p-2 bg-gray-800 rounded-2xl">Users</NavLink>
                <NavLink to="/admin" className="m-2 p-2 bg-gray-800 rounded-2xl">Payment</NavLink>
                <NavLink to="/admin" className="m-2 p-2 bg-gray-800 rounded-2xl">Logout</NavLink>



            </div>
        </>
    )
}