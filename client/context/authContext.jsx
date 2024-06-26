import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{

    const navigate = useNavigate()
//    const [auth,setAuth] = useState(false)

//    console.log("it is interceptor");
//    const token = localStorage.getItem("token")
//    if(token){
//     setAuth(ture)
//    }else{
//     setAuth(false)
//    }



const logOut =()=>{
    localStorage.clear()
    navigate("/")   
}


    return <AuthContext.Provider value={{logOut}}>{children}</AuthContext.Provider>

}