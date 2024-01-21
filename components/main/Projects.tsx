import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/linkedinurl.PNG"
          title="Linkedin URL Validator"
          description="The LinkedIn URL Validator project involves creating a tool that verifies and validates LinkedIn profile URLs, ensuring they adhere to the correct format and structure. It helps users confirm the accuracy of LinkedIn links they receive or wish to share."
          // link="https://64171fe82a3b284e0ec92539--naveenreddy4411.netlify.app/"
          
        />
        <ProjectCard
          src="/Foodwebsite.PNG"
          title="Simple Cake website"
          description="A simple cake website built using HTML, CSS, and JavaScript, providing an interactive and visually appealing platform to showcase various cakes, featuring responsive design for optimal user experience."
          // link="https://theseasoningbowlnetlifyapp.netlify.app/"
        />
        <ProjectCard
          src="/SpaceWebsite.jpg"
          title="Space Themed Website"
          description="Techstack used : React / Typescript / Next.js."
          // link=""
        />
      </div>
    </div>
  );
};

export default Projects;
