import React, { useContext } from 'react';
import { AuthContex } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContex);
    let location = useLocation();
    console.log(location);
    if (loader) {
        return <div>Loading</div>
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;
