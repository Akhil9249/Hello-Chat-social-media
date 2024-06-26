import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Otp from "./Otp";

const URL = "http://localhost:3000/user/otp";





const Accountfind = () => {

    const [emailOrPhone, setEmailOrPhone] = useState();
    const [showOtp, setShowOtp] = useState(false);
    // const [resendOTP, setResendOTP] = useState(false);
    const [accountValidError, setAccountValidError] = useState(false);



    const handleChangeAccountFind = (event) => {
        setEmailOrPhone(event.target.value);
    };

    const handleSubmitAccountFind = async (event) => {
        try {
            //  event.preventDefault();
             console.log("handleSubmit");
 
         const response = await axios("http://localhost:3000/user/findAccount", {
             method: "POST",
             data:{emailOrPhone}
         });
         if(response.data.message === "Youser Exist"){
            setShowOtp(true)
            
         }else if(response.data.message === "Username is not valid" || error.response.status === 401){
            setAccountValidError(true)
         }
         console.log(response);
        } catch (error) {
         
        }
     };

    return (
        <div className="max-w-[1640px]  h-screen mx-auto flex flex-col justify-center items-center p-2">
           
           {showOtp ?(
            <Otp/>
           ):(
            <div className="max-w-[300px] w-full min-h-[350px] border-[1px] p-5 flex flex-col ">              
                <p className="text-xl font-bold text-center">Find your account</p>
                <p className="text-sm mt-5 text-center">Type your registered Email/Phone </p>
                <div className="w-full rounded-sm border-[1px]  mt-10 p-1">
                    <input type="text" placeholder="Email/phone" onChange={handleChangeAccountFind} className="w-full text-xs focus:outline-none" />
                </div>
                <div className="mb-10">
                {accountValidError && <p className="text-[red] cursor-pointer text-xs ">Account detail not valid</p>} 
                </div>
                <button className="bg-[#0095F6] w-full p-1 text-zinc-50 rounded-md" onClick={handleSubmitAccountFind}>Submit</button>       
            </div>
           )}
            






        </div>
    );
};

export default Accountfind;
