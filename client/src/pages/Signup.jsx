import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
// import { axiosInstance } from "../../utils/interceptor";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const URL = "http://localhost:3000/user/signup";

const Signup = () => {
    const navigate = useNavigate()
    const [fields, setFields] = useState({
        emailorphonenumber: "",
        fullname: "",
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        setFields((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = async (event) => {
        try {
            console.log("start");
            console.log(fields);
            // event.preventDefault();
            const response = await axios(URL, {
                method: "POST",
                data: fields,
            });
            console.log(response);
            if(response.data.message === "Account has been Created"){
            toast.success("Account has been Created")

            setTimeout(()=>{
                navigate("/")
            },5000)

            }
        } catch (error) {
            console.log(error);
        }
    };

    

    return (
        <div className="max-w-[1640px]  md:h-screen mx-auto flex flex-col justify-center items-center p-2">
            <div className="max-w-[350px] w-full min-h-[550px] border-[1px] p-4 flex flex-col justify-center  text-center">
                <h1 className="text-2xl sm:text-5xl mt-3 sm:mt-10">Instagram</h1>

                <p className="text-sm font-bold mb-5 mt-5">Sign up to see photos and videos from your friends.</p>
                <div className="flex border-[1px] items-center mb-5 bg-[#0095F6] rounded-md">
                    <div className="bg-white h-full w-10 flex items-center justify-center">
                        <FcGoogle />
                    </div>
                    <button className=" w-full p-1 text-zinc-50   ">Log in with google</button>
                </div>
                <div className="w-full bg-[#f7f6f6] rounded-sm border-[1px] mb-1  py-1  px-1">
                    <input
                        type="text"
                        placeholder="Email/Phone number"
                        name="emailorphonenumber"
                        className="w-full text-xs focus:outline-none bg-transparent"
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full bg-[#f7f6f6] rounded-sm border-[1px] mb-1 py-1  px-1">
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="fullname"
                        className="w-full text-xs focus:outline-none bg-transparent"
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full bg-[#f7f6f6] rounded-sm border-[1px] mb-1 py-1  px-1">
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        className="w-full text-xs focus:outline-none bg-transparent"
                        onChange={handleChange}
                    />
                </div>
                <div className="border-[1px] bg-[#f7f6f6] rounded-sm w-full  px-1 mb-2 py-1">
                    <input
                        type="text"
                        placeholder="Password"
                        name="password"
                        className="w-full text-xs focus:outline-none bg-transparent"
                        onChange={handleChange}
                    />
                </div>

                <div className="w-full mt-2 flex flex-col text-center items-center mb-5 ">
                    <p className="text-xs mb-5 cursor-pointer ">
                        People who use your service may have uploaded <br />
                        your contact information to instagram.
                        <span className="text-[#0095F6] cursor-pointer">
                            Learn
                            <br />
                            more
                        </span>
                    </p>
                    <p className="text-xs cursor-pointer">
                        By signing up, you agree to out{" "}
                        <span className="text-[#0095F6] cursor-pointer">
                            Terms, Privacy <br />
                            Policy{" "}
                        </span>
                        and <span className="text-[#0095F6] cursor-pointer">Cookies Policy</span>
                    </p>
                </div>
                

                <button className="bg-[#0095F6] w-full p-1 text-zinc-50 rounded-md mb-14" onClick={handleSubmit}>
                    Sign up
                </button>
            </div>
            <div className="h-16 max-w-[350px] w-full border-[1px] mt-2 flex justify-center items-center">
                <p className="text-sm">
                    Have an account ?
                    <span className="text-[#0095F6] cursor-pointer">
                        <Link to="/">Log in</Link>
                    </span>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Signup;
