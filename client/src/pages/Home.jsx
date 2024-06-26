import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Home.css";
import { genericError } from "../../utils/genericError";
import { axiosInstance } from "../../utils/interceptor";
import Navbar from "../components/Aside/Navbar";
import sky from "../../public/sky.jpg";
import { Container } from "postcss";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { VscSaveAll } from "react-icons/vsc";

const URL = "http://localhost:3000/user/home";

const Home = () => {
    const [count, setCount] = useState([1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12]);
    const abortController = useRef(new AbortController());
    const [nav, setNav] = useState(false);
    const [data, setData] = useState([]);
    const [post, setPost] = useState([]);

    const navActive = () => {
        setNav((prev) => !prev);
    };

    const   follow = async (followerId) => {
        console.log(followerId,"==userId");
        try {
            const response = await axiosInstance("/follow", {
                method: "PUT",
                data: {followerId},
            });
            // onsole.log(response.alluser, "===response==ollow");
            setData(response.data.alluser);

        } catch (error) {
            genericError(error);
        }
    };


    const fetchData = async (event) => {
        try {
            // let comarr=[[{abc:"12345"}],[{ab:"12345"}]]
            console.log("fetchData");
            const response = await axiosInstance("/home");
            console.log(response.data.alluser, "===response==fetchData");
            setData(response.data.alluser);
           let postResult = response.data.posts.map((data)=>data.posts)
            let combinedArray = postResult.flat(1)
            setPost(combinedArray)
        } catch (error) {
            genericError(error);
        }
    };

    useEffect(() => {
        fetchData();
        //     fetchProfile();
        //     return () => {
        //         abortController.current.abort();
        //     };
    }, []);

    return (
        <div className="max-w-[1640px] w-full  h-screen flex p-2">
            <div className="hidden md:flex max-w-[200px] w-full min-h-full border-r-[1px]  ">
                <Navbar />
            </div>
            <div
                className={
                    nav
                        ? "fixed top-0 left-0 max-w-[200px] w-full h-screen bg-[#f0eeee] z-10 duration-300"
                        : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
                }
            >
                <Navbar />
            </div>
            <div className=" max-w-[800px] w-full h-full  ">
                <div className="top w-full h-[150px] custom-scrollbar overflow-x-auto   flex gap-3 items-center pl-5">
                    {count.map((value, index) => (
                        <div className="text-center" key={index}>
                            <div className=" w-20 h-20   rounded-full cursor-pointer">
                                <img src={sky} alt="" style={{ objectFit: "cover" }} className="w-20 h-20 rounded-full" />
                            </div>
                            <p className="text-xs">Nameee</p>
                        </div>
                    ))}
                </div>
                <div className="md:hidden ml-auto cursor-pointer fixed top-1 right-2" onClick={navActive}>
                    <HiOutlineBars3 size={25} />{" "}
                </div>
                <div className="w-full h-full border-[2px] border-[#66cf4b] flex flex-col items-center overflow-y-auto">
                    {post.map((data,index)=>{
                        console.log(data,"=======dm")
                      
                        return(
                    <div key={index} className="border-[2px] border-[orange]  max-w-[400px] w-full h-[450px] p-2">
                        <div className="w-full min-h-[50px] flex justify-between ">
                            <div className="flex items-center">
                                <div className="w-[30px] h-[30px] rounded-full bg-red-500 mr-2"></div>
                            <p className="text-sm">Name</p>
                            </div>
                            <p className="cursor-pointer">...</p>
                        </div>
                        <div className="w-full  border-[2px] border-[#4c85ac] h-[250px]">
                        <img src={`http://localhost:3000/images/upload_file-${data.image}`} alt="" tyle={{ objectFit: "contain" }} className="h-full"/>
                        </div>
                        <div className="w-full min-h-[120px] border-[2px] border-[#a641af]">
                            <div className="flex justify-between mt-2 ">
                                <div className="flex max-w-[90px] w-full justify-between">
                                    <FcLike size={20} className="cursor-pointer"/>
                                    <FaRegComment size={20}  className="cursor-pointer"/>
                                    <RiShareForwardLine size={20}  className="cursor-pointer"/>
                                </div>
                                <VscSaveAll size={20}  className="cursor-pointer"/>
                            </div>
                            <div className="mt-2">
                            <p className="text-xs">{data.like} likes</p>
                            <p className="text-xs">Youtube</p>
                            <p className="text-xs">view all comments</p>
                            </div>
                        </div>
                    </div>
                    )})}
                </div>
            </div>
            <div className=" w-full  min-h-full pl-2 ">
                <div className="hidden w-full h-[100px]  md:flex items-center">
                    <div className=" w-16 h-16  rounded-full ">
                        <img src={sky} alt="" style={{ objectFit: "cover" }} className="w-16 h-16 rounded-full" />
                    </div>
                </div>
                <div className="hidden md:block mt-2 ">
                    <p className="mb-2">Suggested for you</p>
                    {data.map((value, index) => {
                        if (index <= 6) {
                            return (
                                <div className="w-full flex items-center gap-1 mb-4" key={index}>
                                    <div className=" w-20 h-20  rounded-full" key={index}>
                                        <img
                                            src={sky}
                                            alt=""
                                            style={{ objectFit: "cover" }}
                                            className="w-20 h-20 rounded-full"
                                        />
                                    </div>
                                    <p className="text-xs cursor-pointer ml-2">{value.fullName}</p>
                                    <p className="ml-auto text-xs mr-2 cursor-pointer text-[#0095F6]" onClick={()=>follow(value._id)}>follow</p>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;
