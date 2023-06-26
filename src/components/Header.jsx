import React from 'react';
// import logo from "../assets/images/astronout.png"
// import logo1 from "../assets/images/astronout1.png"
import bg from "../assets/images/bg.jpg";
import "../styles.css";
import Navbar from './Navbar';

function Header() {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = 'Mernstackdeveloperjakir.pdf'; 
    downloadLink.download = 'jakirmernstackdeveloper.pdf'; 
    downloadLink.click();
};
  return (
    <>
      <div id='home' style={{ backgroundImage: `url(${bg})` }} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center">
            <div className="btn py-3">
              <button className=' border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl'>Welcome to my Portfolio</button>
            </div>
            <h1 className='text-white text-5xl font-bold'>Hi! I'm Jakir </h1>
            <p className='text-white py-4 max-w-lg '> I'm passionate about building robust and scalable web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. With a strong foundation in full-stack development, I bring creativity, attention to detail, and a problem-solving mindset to every project I work on.</p>
            <button onClick={handleDownload} className='border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl'>Download Resume <i className="fa-solid fa-arrow-down text-lg  p-[2px] "></i> </button>
          </div>
          <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
            <img className='w-96 ast-img' src="new.png" alt="" />

          </div>
          <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">

            <img className='w-96 ast-img' src="new.png" alt="" />
          </div>

        </div>
      </div>
    </>
  )
}

export default Header