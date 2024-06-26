import React, { useState } from 'react'
import Navbar from '../components/Aside/Navbar'
import sky from "../../public/sky.jpg"
import { HiOutlineBars3 } from 'react-icons/hi2'

const Settings = () => {
    const [nav,setNav] = useState(false)
    const navActive = ()=>{
        setNav((prev)=>!prev)
    }
  return (
    <div className="max-w-[1640px] mx-auto  h-screen flex p-2">
        <div className='hidden md:flex max-w-[350px] w-full min-h-[550px] '>
            <Navbar/>
        </div>
        <div className={nav ? 'fixed top-0 left-0 max-w-[200px] w-full h-screen bg-[#f0eeee] z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }><Navbar/></div>
        <div className='flex md:block flex-col items-center   max-w-[1013px] w-full min-h-full pt-5 '>
            <div className='md:hidden ml-auto cursor-pointer' onClick={navActive}><HiOutlineBars3 size={25}/> </div>
            <p className='text-2xl '>Settings</p>
            <div className=' max-w-[600px] w-full min-h-[500px] border-[1px] flex justify-center pt-10 mt-5'>
            <div className='max-w-[400px] w-full  '>
                <p className='text-2xl mb-5'>Edit profile</p>
                <div className='w-full flex items-center'>
                <img src={sky} alt="" style={{ objectFit: "cover" }} className="w-16 h-16 rounded-full" />
                <div className='ml-10'>
                    <p className='text-xs'>Name</p>
                    <p className='text-xs cursor-pointer text-[#0095F6]'>Change profile photo</p>
                </div>
                <p className='text-xs ml-auto  cursor-pointer text-[#0095F6]'>Change password</p>
                </div>
                <div className='max-w-[400px]  mt-5'>
                <div className='flex justify-between w-full'>
                    <p className='text-sm font-medium'>Website</p>
                    <div className='max-w-[250px]  w-full'>
                    <div className='max-w-[250px]  w-full border-[1px]  rounded-sm'><input type="text" placeholder='Website' className='w-full text-xs outline-none px-1' /></div>
                    <p className='text-xs mt-3'>Editing your links only available on mobile. visit the website app and edit your profile to change the website in your bio</p>
                    </div>
                </div>

                <div className='flex justify-between mt-5'>
                    <p className='text-xs font-medium'>Full Name</p>
                    <div className='max-w-[250px]  w-full'>
                    <div className='border-[1px] max-w-[400px]  w-full rounded-sm'><input type="text"  className='w-full outline-none' /></div>
                    <p className='text-xs'>max 50 words</p>
                    </div>
                </div>

                <div className='flex justify-between mt-5'>
                    <p className='text-xs font-medium'>Bio</p>
                    <div className='max-w-[250px]  w-full'>
                    <div className='border-[1px] max-w-[400px]  w-full rounded-sm'><input type="text" placeholder='' className='w-full outline-none' /></div>
                    <p className='text-xs'>max 150 words</p>
                    </div>
                </div>
                <div className='w-full text-center mt-5'><button className='bg-[#0095F6] px-3 py-1 rounded-md text-sm text-white'>submit</button></div>
                </div>
                </div>
            </div>
            

        </div>
      
    </div>
  )
}

export default Settings
