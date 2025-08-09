import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../components/ContextAuth";

export const Profile = () => {


  
  const { user} = useContext(AuthContext);
  
   if (!user) {
    return (
      <div className="text-center mt-10 text-gray-500">
        Loading profile...
      </div>
    );
  }

    return(
        <>
        <div className="max-w-md mx-auto mt-10 m-10 p-6 border rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <div className="mb-4">
       <div className="flex items-center gap-4">
  <div className="w-12 h-12 bg-gray-900  text-white flex items-center justify-center rounded-full text-lg font-semibold uppercase">
    {user.name?.charAt(0)}
  </div>
  
  <div>
    <p><strong>Name:</strong> {user.name}</p>
    <p><strong>Email:</strong> {user.email}</p>
  </div>
</div>
       
      </div>

      
    </div>
        </>
    )
}