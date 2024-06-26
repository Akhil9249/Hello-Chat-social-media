import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const URL = "http://localhost:3000/user/otp";





const Otp = () => {


    const [otp, setOtp] = useState("");
    const [fields, setFields] = useState();
    const [resendOTP, setResendOTP] = useState(false);

    const handleChange = (event) => {
        setFields(event.target.value);
    };

    const resendOtp = (event) => {
        setResendOTP((prev)=> !prev)
    };

    const handleSubmit = async (event) => {
       try {
            event.preventDefault();
            console.log("handleSubmit");

        const response = await axios(URL, {
            method: "PUT",
            data:fields
        });
        console.log(response);
       } catch (error) {
        
       }
    };

    useEffect(()=>{
        setTimeout(()=>{
            console.log("setResendOTP");
            setResendOTP((prev)=> !prev)
        },5000)
    },[])



    return (
        <div className="max-w-[1640px]  h-screen mx-auto flex flex-col justify-center items-center p-2">
            <div className="max-w-[300px] w-full min-h-[350px] border-[1px] p-5 flex flex-col ">
                    <p className="text-xl font-bold text-center">Enter OTP</p>
                    <p className="text-sm mt-5">OTP has been send to your registered email/phone debug</p>
                    <div className="w-full rounded-sm border-[1px] mb-10 mt-10 p-1">
                        <input type="text" placeholder="otp" value={otp} className="w-full text-xs focus:outline-none" />
                    </div>
                    <button className="bg-[#0095F6] w-full p-1 text-zinc-50 rounded-md"><Link to="/resetpassword">Submit</Link></button>
                    {resendOTP && <p className="text-[#0095F6] cursor-pointer text-xs mt-5 " onClick={resendOtp}>Resend OTP</p>}    
            </div>
        </div>
    );
};

export default Otp;
