import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const PrivateRoute = ({ children, role }) => {

    const { user } = useSelector((state) => state.auth);
    console.log(user);
    
    const location = useLocation();


    if (!user) {
        toast.error("You must be logged in!");
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    if(role && user.role !== role){
 
        toast.error("You are not authorized to access this Page!");
         return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children

}

export default PrivateRoute
