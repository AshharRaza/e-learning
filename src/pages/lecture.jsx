import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Data from "../Data/data.json"
import { Loader } from "./Loader"
import { MdRateReview } from "react-icons/md";
import { MdOutlineComment } from "react-icons/md";
import { LuNotebookText } from "react-icons/lu";


export const Lecture = () => {

    const [data,setData] = useState()
    const params = useParams()
    const [load,setLoad] = useState(true)
    console.log(params)
    
      useEffect(() => {
   
        try {
             const filterData = Data.find((item) => item.id.toString() === params.id)
    setData(filterData)
        } catch (error) {
            console.log(error)
        }
        finally{
            setLoad(false)
        }
  }, [params.id])
    
  console.log(data)

    return(
        <>
        <div className="lecture-container ">
            {
                load ? <Loader/> : <>
                <div className="video-lecture w-220 h-150 m-4">
                <iframe
  width="100%"
  height="400"
  src={`https://www.youtube.com/embed/${data.videoLinks[0]}`}
  title="YouTube video"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
></iframe>

<div className="info flex justify-between">

<div>
    <h1 className="text-3xl">{data.title}</h1>
            <p className="text-sm text-gray-600">{data.description}</p>
            <p className="text-purple-500">Rating: {data.rating}</p>

</div>
<div className="flex text-center ">
               <span className="text-3xl m-2 cursor-pointer"> <MdOutlineComment /></span>
                <span  className="text-3xl m-2 cursor-pointer"><LuNotebookText /> </span>
</div>
            
            
        
    
</div>
<div className="reviews m-3">
    <div className="head flex">
         <h1 className="text-3xl">Learners Review</h1>
<MdRateReview className="size-10" />
    </div>
         

<div className="reviews flex ">
    {
       
        data.reviews.map((curReview) => {

            return(
                <div className="w-50 m-2 p-2 bg-purple-300 ">
                <h2>{curReview.name}</h2>
                <p>{curReview.comment}</p>
                <p>Rating: {curReview.rating}</p>
               </div>
            )
        })
    }
</div>
    
</div>


            </div>
            <div className="lecture-modules bg-purple-200 w-100 rounded-4xl shadow-5xl m-2 ">
                <p className="text-2xl m-2">Lectures Modules</p>
            <ul className="m-4">
                {
                    data.modules.map((curItem,index) => {

                        return(
                            <>
                             <div className="module m-1 p-2 shadow-2xs flex justify-between cursor-pointer" key={index}  >
                                
                                <span>{curItem}</span><span>2:50</span>
                                

                            </div>
                            
                            
                            </>
                           

                        )
                        
                    })
                }
            </ul>
            <button className="m-4 p-2 w-90 bg-purple-700 text-white cursor-pointer">Buy Now</button>
                </div>
                </>
            
            

            

            }
            
        
        </div>
        
        </>
    )
}