import React, { useContext, useState } from "react";
import { MdHomeFilled } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgDarkMode } from "react-icons/cg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AuthContext } from "../../../context/authContext";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
   const [navSub,setNavSub] = useState(false)

   const showNavSub =()=>{
    setNavSub(prev=>!prev)
   }

    const {logOut} = useContext(AuthContext)
    return (
        <div className=" max-w-full h-full flex flex-col justify-between pl-3 relative ">
            <p className="text-2xl mt-5 mb-5">Instagram</p>
            <div className="flex items-center ">
            <MdHomeFilled />
            <Link to="/home" className="ml-10 text-xs cursor-pointer">Home</Link>
            </div>
            <div className="flex items-center ">
            <IoSearchSharp />
            <span className="ml-10 text-xs cursor-pointer">Search</span>
            </div>
            <div className="flex items-center ">
            <MdOutlineExplore />
            <span className="ml-10 text-xs cursor-pointer">Explore</span>
            </div>
            <div className="flex items-center ">
            <TfiVideoClapper />
            <span className="ml-10 text-xs cursor-pointer">Reels</span>
            </div>
            <div className="flex items-center ">
            <BiSolidMessageRoundedDetail />
            <Link to="/messages" className="ml-10 text-xs cursor-pointer">Messages</Link>
            </div>
            <div className="flex items-center ">
            <IoNotificationsOutline />
            <span className="ml-10 text-xs cursor-pointer" >Notification</span>
            </div>
            
            <div className="flex items-center ">
            <IoMdAddCircleOutline />
            <Link to="/newpost" className="ml-10 text-xs cursor-pointer">Create</Link>
            </div>
            <div className="flex items-center ">
            <div className="w-[15px] h-[15px] bg-red-700 rounded-full">

            </div>
            <Link to="/profile" className="ml-10 text-xs cursor-pointer">profile</Link>
            </div>
            
            <div className="flex items-center mt-16 mb-40" >
            <HiOutlineBars3 />
            <span className="ml-10 text-xs cursor-pointer" onClick={showNavSub}>More</span>
            </div>

            {navSub &&
            <div className=" w-[200px] h-[110px] shadow-inner px-5  border-[1px] rounded-md absolute top-[330px] bg-white p-1">
            
            <div className="w-full border-b-[5px] mt-2">
            <div className="flex items-center mb-2">
            <IoSettingsOutline />
            <Link to="/settings" className="ml-10 text-xs cursor-pointer">settings</Link>
            </div>
            </div>

            <div className="flex items-center border-b-[2px] mt-2 pb-2">
            <CgDarkMode />
            <span className="ml-10 text-xs cursor-pointer">Dark Mode</span>
            </div>

            <div className="flex items-center mt-2 pb-2">
            <CiLogin />
            <span className="ml-10  text-xs cursor-pointer" onClick={logOut}>Log out</span>
            </div>
            </div>
            }
        </div>
    );
}; 

export default Navbar;
