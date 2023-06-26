import React from "react";

function Footer() {
  return (
    <>
      <div className="footer bg-[#171717]">
       <div>
       <div className="wrap flex justify-around gap-4 items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
          <div>
            <h1 className="text-3xl">Jakir</h1>
            <h1>Contact Us:</h1>
            <p>Email: jakirhossain574413@gmail.com</p>
            <p>phone: 01751553180</p>
          </div>

          <div className="flex gap-4 cursor-pointer ">
            <a href="https://www.linkedin.com/in/md-jakir-hossain-a3ab15219/" target="_blank">
              <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://www.instagram.com/iburakz" target="_blank">
              <i className="fa-brands fa-instagram border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://github.com/Jakir80" target="_blank">
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>
        </div>
        {/* <h1 className="text-center m-4 z-10 text-4xl">All Copy right Reserved by md Jakir Hossain</h1> */}
       </div>
      </div>
     
    </>
  );
}

export default Footer;
