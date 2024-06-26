import React from 'react'
import Navbar from '../components/Aside/Navbar'

const Messages = () => {
  return (
    <div className='max-w-[1640px]  h-screen flex   '>
        <div className='max-w-[200px] w-full min-h-full  '>
            <Navbar/>
        </div>
        
        <div className='max-w-[300px] w-full min-h-full border-r-[1px] border-l-[1px] '>
        <div className='max-w-[300px] w-full min-h-20    relative'>

        <div className='max-w-[300px] w-full absolute bottom-0 border-b-2   flex justify-between px-2 '>
          <p className='test-xs cursor-pointer'>Priary</p>
          <p className='test-xs cursor-pointer'>Request</p> 
        </div>


        </div>

        </div>
        <div className='w-full min-h-full border-2  border-[#71ca55]'></div>

      
    </div>
  )
}

export default Messages
