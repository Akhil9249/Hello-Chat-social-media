import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const URL = "http://localhost:3000/user/resetpassword";

const Resetpassword = () => {


    const [fields, setFields] = useState({
        newpassword:"",
        confirmpassword:""
        });
    const handleChange = (event) => {

        setFields((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));

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

    return (
        <div className="max-w-[1640px]  h-screen mx-auto flex flex-col justify-center items-center p-2">
            <div className="max-w-[300px] w-full h-[350px] border-[1px] p-5 flex flex-col   items-center">
                <p className="text-xl font-bold mb-10">Reset Password</p>

                <div className="border-[1px] rounded-sm w-full  p-1 mb-2">
                    <input type="text" placeholder="New Password" name="newpassword" onChange={handleChange} className="w-full text-xs focus:outline-none" />
                </div>
                <div className="border-[1px] rounded-sm w-full  p-1 mb-10">
                    <input type="text" placeholder="Confirm Password" name="confirmpassword" onChange={handleChange}  className="w-full text-xs focus:outline-none" />
                </div>
                <button className="bg-[#0095F6] w-full p-1 text-zinc-50 rounded-md" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Resetpassword;
