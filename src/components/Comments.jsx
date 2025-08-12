import { IoSend } from "react-icons/io5";
import { toast } from "react-hot-toast"

export const Comments = () => {

    const handleComment = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        console.log(data)

        try {
            const res = await fetch('http://localhost:3000/comment',{
                method: 'POST',
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(data)
                
            })
            if(res.ok){
                toast.success("Review Submitted")
            }
          
            
        } catch (error) {
            console.log(error)
            
        }
        
    }

    return (
        <>
       
        <form  className="mt-6  p-4 w-200 bg-gray-100 rounded-lg " onSubmit={handleComment}>
          <h3 className="text-lg font-semibold mb-2">Write a Review</h3>


          {/* Comment */}
          <div className="flex ">
            <textarea
            className="w-full p-2  rounded-lg mb-3 outline-none "
            rows="1" 
            placeholder="Write your review..."
            name="text"
          
          ></textarea>

          <button
            type="submit"
            className="bg-gray-900 text-white text-1xl h-10 px-4 py-2 rounded hover:bg-gray-800"
          >
            <IoSend />
          </button>

          </div>
          
        </form>
   
        </>
    )
}