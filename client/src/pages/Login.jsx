import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const URL = "http://localhost:3000/user/login";

const Login = () => {
    const navigate = useNavigate();

    const [fields, setFields] = useState({
        emailorphonenumber: "",
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
            event.preventDefault();
            const response = await axios(URL, {
                method: "POST",
                data: fields,
            });

            // console.log(response);
            // console.log(response.data.accessToken);
            
            localStorage.setItem("token", response.data.accessToken);

            if (response.data.message === "login successfull") {
                toast.success("Login successfull");

                setTimeout(() => {
                    navigate("/home");
                }, 3000);
            }
        } catch (error) {
            console.log("it is login error catch");
            console.log(error);
        }
    };
    return (
        <div className="max-w-[1640px]  h-screen mx-auto flex flex-col justify-center items-center p-2">
            <div className="max-w-[300px] w-full min-h-[350px] border-[1px] p-5 flex flex-col items-center">
                <h1 className="text-2xl sm:text-5xl   mt-2 sm:mt-2">Instagram</h1>
                <div className="w-full rounded-sm border-[1px] mb-2 mt-10 p-1">
                    <input
                        type="text"
                        placeholder="Phone number, Username, or Email"
                        className="w-full text-xs focus:outline-none"
                        onChange={handleChange}
                        name="emailorphonenumber"
                    />
                </div>
                <div className="border-[1px] rounded-sm w-full  p-1 mb-2">
                    <input
                        type="text"
                        placeholder="Password"
                        className="w-full text-xs focus:outline-none"
                        onChange={handleChange}
                        name="password"
                    />
                </div>
                <button className="bg-[#0095F6] w-full p-1 text-zinc-50 rounded-md mb-14" onClick={handleSubmit}>
                    Log in
                </button>

                <p className="text-xs mb-5 cursor-pointer">Log in with google</p>
                <p className="text-xs font-bold cursor-pointer">
                    <Link to="/accountfind">Forgot Password ?</Link>
                </p>
            </div>
            <div className="min-h-10 max-w-[300px] w-full border-[1px] mt-2 flex justify-center items-center">
                <p className="text-sm">
                    Don't have an account ?
                    <span className="text-[#0095F6] cursor-pointer">
                        <Link to="/signup">Sign up</Link>
                    </span>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
