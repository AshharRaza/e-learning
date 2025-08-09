import {useNavigate} from "react-router-dom"
import { toast } from "react-hot-toast"

export const Register = () => {



    const navigate = useNavigate()
    const handleSubmit = async(e) => {

      
        e.preventDefault()
        const formData = new FormData(e.target)
        
        const data = Object.fromEntries(formData.entries())
        console.log(data)

        try {
            const sendData = await fetch("http://localhost:3000/register",{

                method:'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)



            })
            console.log(sendData)
            const backres = await sendData.json()

            if(!sendData.ok){
              toast.success(backres.message)
            }
            else{
              toast.success("Register Successful")
              navigate("/login")

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
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full mb-4 px-4 py-2 border-b border-gray-900"
         
          required
        />

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
          className="w-full mb-4 px-4 py-2 border-b border-gray-900"
        
          required
        />

        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2  hover:bg-gray-600"

        >
          Sign Up
        </button>
      </form>
    </div>
    )
}