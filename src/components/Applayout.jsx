import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { useEffect, useState } from "react"

export const Applayout = () => {

    
    

    return(
        <>
        <Header  />
        <Outlet />
       <Footer/>
        
        </>
        
    )
}