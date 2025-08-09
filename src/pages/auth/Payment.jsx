import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast"
import { Loader } from "../Loader";

export const PaymentPage = () => {
    
  
    const location = useLocation();
  const course = location.state?.data;
  console.log(course)
  const navigate = useNavigate()
  
 
 

  const PaymentData = async() => {
    try {
    const res = await fetch(`http://localhost:3000/courses/${course.id}/buynow`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(course),
        credentials:"include"

    })
    console.log("res",res)
    if(!res.ok){
        toast.success("Payment Not Successful")
    }
    const data = await res.json()
    toast.success(data.message)
    navigate("/mycourses")

  } catch (error) {

    console.log(error)
  }
 

  }
  
   
  

  

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Course Payment</h1>

<div>
  {
    !course ? <Loader/> :
    (
      <>
       {/* Course Summary */}
      <div className="mb-6 border p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Course Summary</h2>
        <p name="title"><strong>Title:</strong> {course?.courseTitle?.toUpperCase() }</p>
        <p name="price"><strong>Price:</strong> ₹{course?.price}</p>
      </div>

      {/* Payment Method */}
      <div className="mb-6">
        <label htmlFor="paymentMethod" className="block text-gray-700 font-medium mb-2">
          Select Payment Method
        </label>
        <select
          id="paymentMethod"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        >
          <option value="razorpay">Razorpay</option>
          <option value="stripe">Stripe</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>

      {/* Pay Button */}
      <button
        className="w-full bg-gray-900 text-white font-semibold py-3 rounded-md hover:bg-gray-700 transition duration-200"
        onClick={ PaymentData}
      >
        Proceed to Pay ₹{course?.price }
      </button>
      
      </>
    )
  }
</div>
     
    </div>
  );
};


