import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const token = localStorage.getItem("token");
    console.log(token, "token");
    if (!token) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
