import toast from "react-hot-toast"

export const AdminSignUp = () => {


    const handleSubmit = async(e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        console.log(data)

        try {
            const res = await fetch("http://localhost:3000/adminregister",{

                method:'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)



            })
            if(res.ok){
              toast.success("Register Successful")
            }
        } catch (error) {
            console.log(error)
            
        }
    }

    return(
        <div className="flex items-center justify-center p-5 bg-gray-100">
      <form
       
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          
          className="w-full mb-4 px-4 py-2 border-b border-gray-900"
          required
        />
        
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          
          className="w-full mb-4 px-4 py-2 border-b border-gray-900"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          
          className="w-full mb-4 px-4 py-2 border-b border-gray-900"
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
          className="w-full bg-gray-900 text-white p-2  hover:bg-gray-700 transition"
        >
          Register
        </button>
      </form>
    </div>

    )
}