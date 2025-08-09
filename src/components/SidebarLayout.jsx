import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { useEffect, useState } from "react"

export const SidebarLayout = () => {

   
    return (
        <>
        <div className="flex">
            <Sidebar />
            <Outlet/>

        </div>
        
        
        </>
    )
}