import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()


export const AuthProvider = ({children}) => {


const [user,setUser] = useState(null)
    const CheckLogin = async() => {

        try {
        const res = await fetch('http://localhost:3000/checklogin',{
            method:'GET',
            credentials:"include"
        })
        // console.log("checklogin",res.ok)
        if(res.ok){
            const data = await res.json()
        
        setUser(data)

        }
        
        
        
    } catch (error) {
        console.log(error)
    }

    }
    
    useEffect(() => {

        CheckLogin()

    },[])

    return(<AuthContext.Provider value={{user,setUser}}>
        {children}

    </AuthContext.Provider>)
}

