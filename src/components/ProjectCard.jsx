import React from 'react'

function ProjectCard({ item }) {
  return (
    <>
      <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
        <img src={item.img} alt="" />
        <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20">
          <h1 className="font-bold text-3xl">{item.title}</h1>
          <p className="font-bold">{item.description}</p>
        <a href={item.github}>
        <button className='border-2 border-[#b0aaaa]  text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-2 rounded-2xl'>Github </button>
        </a>
        <a href={item.demo}>  <button className=' m-2 border-2 border-[#b0aaaa]  text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-2 rounded-2xl'>Live Demo</button></a>
        </div>
      </div>
    </>
  )
}

export default ProjectCard