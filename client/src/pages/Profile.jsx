import React, { useState } from 'react'
import Navbar from '../components/Aside/Navbar'
import sky from "../../public/sky.jpg"
import { HiOutlineBars3 } from 'react-icons/hi2'

const Profile = () => {
  const [nav,setNav] = useState(false)
  const navActive = ()=>{
      setNav((prev)=>!prev)
  }
  return (
    <div className="max-w-[1640px] mx-auto  h-screen flex p-2">
    <div className='hidden md:flex max-w-[200px] w-full min-h-[550px] border-[2px]'>
        <Navbar/>
    </div>
    <div className={nav ? 'fixed top-0 left-0 max-w-[200px] w-full h-screen bg-[#f0eeee] z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }><Navbar/></div>
    {/* md:block  */}
    <div className='flex flex-col items-center  max-w-[1200px] w-full min-h-full pt-5 border-[2px] border-[#00ffff]'>
       <div className='max-w-[700px] w-full h-[100px] border-[1px] flex'>

        <div className='w-[100px] h-[100px] bg-[blue] flex justify-center items-center'><div className='w-[100px] h-[100px] bg-[blue]'><img src={sky} alt="" style={{ objectFit: "cover" }} className="w-50 h-50 rounded-full"/></div></div>

        <div className='h-full w-full ml-10'>
        <div className='w-full h-[50px] border-[] flex justify-between'>
          <p className='text-sm'>Akhil</p>
          <button className=' bg-[#c6c6c9] border-[1px] w-[100px] h-[30px] text-center  rounded-md text-sm'>Edit profile</button>
          <button className=' bg-[#c6c6c9] border-[1px] w-[100px] h-[30px] text-center  rounded-md text-sm'>view active</button>
        </div>
        <div className='w-full h-[50px]   flex justify-between'>
          <p className='text-sm'>Post</p>
          <p className='text-sm'>Edit profile</p>
          <p className='text-sm'>view active</p>
        </div>
        </div>
        
       </div>
       <div className='max-w-[700px] w-full h-[100px] border-b-[1px] '>
       <div className='max-w-[500px] w-full h-[90px]  flex justify-between items-center'>
        <div><div className='w-[70px] h-[70px] bg-[blue] rounded-full '></div></div>
        <div><div className='w-[70px] h-[70px] bg-[blue] rounded-full '></div></div>
        <div><div className='w-[70px] h-[70px] bg-[blue] rounded-full '></div></div>
        <div><div className='w-[70px] h-[70px] bg-[blue] rounded-full '></div></div>
       </div>
       </div>

       <div className='max-w-[700px] w-full h-full  flex flex-col items-center'>
        <div className='max-w-[300px] w-full min-h-[50px]  flex justify-between items-center'>
        <p className='text-sm'>posts</p>
        <p className='text-sm'>Reels</p>
        <p className='text-sm'>Saved</p>
        </div>
        <div className='max-w-[700px] w-full h-full  flex gap-1'>

          <div className='max-w-[200px] w-full h-[200px] border-[1px] border-[orange]'>
          <p className='text-sm'></p>
          </div>
          <div className='max-w-[200px] w-full h-[200px] border-[1px] border-[orange]'>
          <p className='text-sm'></p>
          </div>

        </div>

       </div>
        
    </div>
  
</div>
  )
}

export default Profile
