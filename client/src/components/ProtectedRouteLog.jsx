import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteLog = () => {
    const token = localStorage.getItem("token");
    console.log(token, "token");
    if (token) {
        return <Navigate to="/home" />;
    }

    return <Outlet />;
};

export default ProtectedRouteLog;
