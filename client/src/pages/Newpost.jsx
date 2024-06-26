import React, { useState } from 'react'
import Navbar from '../components/Aside/Navbar'
import { axiosInstance } from '../../utils/interceptor';


const Newpost = () => {
        const [image, setImage] = useState("");
        const [title, setTitle] = useState("");

        const imageUpload = async (event) => {
            const formData = new FormData();
            formData.append("upload_file", image);
            // formData.append("title", "akhil");
            const response = await axiosInstance("/posts/upload", {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                data: formData,
            })   
            // setCount(response.data)
        };

        const photoApload = (event) => {
            console.log(event.target.files[0]);
            setImage(event.target.files[0]);
        };

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
    <div className='w-full min-h-full border-2 flex justify-center items-center border-[#71ca55]'>
        <div className='max-w-[400px] w-full min-h-[500px] border-[2px]'>
        <input type="file" onChange={photoApload}/>
        {/* <input type="text" placeholder='text'/> */}
        <button onClick={imageUpload}>ok</button>
        </div>
    </div>

  
</div>
  )
}

export default Newpost
