import React, { useState } from "react";
import img1 from "../assets/images/one.png";
import img3 from "../assets/images/three.png";
import img2 from "../assets/images/two.png";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Sports World",
      description: "Design & Development",
      img: img1,
      github:'https://github.com/Jakir80/school-site-client',
      demo:'https://symphonious-pika-949131.netlify.app/'
    },
    {
      id: 2,
      title: "Toys Market",
      description: "Design & Development",
      img: img2,
      github:'https://github.com/Jakir80/Toys-Market-client-site',
      demo:'https://loquacious-sundae-ceb316.netlify.app/'
    },
    {
      id: 3,
      title: "Recipe hunter",
      description: "Design & Development",
      img: img3,
      github:"https://github.com/Jakir80/Recipe-hunter-Client",
      demo:"https://jade-raindrop-524b0d.netlify.app/"
    },
  
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
          cupiditate! Molestiae placeat architecto nihil obcaecati illum minima
          incidunt dolores? Officia consectetur optio non totam cum eos soluta
          ipsa et quod.
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Projects
          </button>
      
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
    
      </div>
    </>
  );
}

export default Projects;
