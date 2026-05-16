import React from "react";

import { FaFigma, FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiNetlify,
  SiPostman,
  SiRender,
  SiTailwindcss,
  SiVisualstudio,
} from "react-icons/si";



import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { CgVercel } from "react-icons/cg";

const frontendSkills = [
  {
    icon: <RiJavascriptFill size={50} className="text-yellow-500" />,
    label: "Javascript",
  },
  {
    icon: <FaReact size={50} className="text-sky-500" />,
    label: "React JS",
  },
  {
    icon: <FaHtml5 size={50} className="text-red-500" />,
    label: "HTML5",
  },
  {
    icon: <SiTailwindcss size={50} className="text-blue-500" />,
    label: "TailwindCSS",
  },
  {
    icon: <IoLogoCss3 size={50} className="text-blue-500" />,
    label: "CSS",
  },
  {
    icon: <FaFigma size={50} className="text-pink-500" />,
    label: "Figma",
  },
];

const backendSkills = [
  {
    icon: <FaNodeJs size={50} className="text-green-500" />,
    label: "Node Js",
  },
  {
    icon: <SiMongodb size={50} className="text-green-500" />,
    label: "MongoDB",
  },
  {
    icon: <SiExpress size={50} className="text-black" />,
    label: "Express JS",
  },
  {
    icon: <SiJsonwebtokens size={50} className="text-red-600" />,
    label: "JWT",
  },
  {
    icon: <SiVisualstudio size={50} className="text-blue-600 bg-white" />,
    label: "VSCode",
  },
];

const deployment = [
  {
    icon: <PiGithubLogoFill size={50} className="text-black" />,
    label: "Github",
  },
  {
    icon: <SiPostman size={50} className="text-orange-500" />,
    label: "Postman",
  },
  {
    icon: <CgVercel size={50} className="bg-black text-white " />,
    label: "Vercel",
  },
  {
    icon: <SiNetlify size={50} className="text-green-700" />,
    label: "Netlify",
  },
  {
    icon: <SiRender size={50} className="text-black bg-white rounded-tl-2xl" />,
    label: "Render",
  },
];

const Skills = () => {
  return (

    
    <section className="w-full  p-4 sm:p-6 lg:p-8 mb-24 lg:mb-24" id="skills">
        
      {/* Heading */}
        <section className="flex items-center gap-4 pb-8">
        <hr className="h-1 w-16 bg-gray-600 rounded-full" />
        <p className="text-xl lg:text-2xl font-medium">
          &lt;My Skills &nbsp;/&gt;
        </p>
      </section>
      <div className="w-full lg:w-[90%] mx-auto p-6 lg:p-8 rounded-xl py-8 shadow-sm  flex flex-col gap-6 card items-center">
      

      {/* Frontend Skills */}
      <section className="p-2 flex gap-16 md:gap-14 justify-center flex-wrap text-lg mt-4">
        {frontendSkills.map((skill) => (
          <div
            key={skill.label}
            className="flex justify-center items-center flex-col"
          >
            {skill.icon}
            {skill.label}
          </div>
        ))}
      </section>

      {/* Backend Skills */}
      <section className="p-2 flex gap-16 md:gap-14 justify-center flex-wrap text-lg mt-4">
        {backendSkills.map((skill) => (
          <div
            key={skill.label}
            className="flex justify-center items-center flex-col"
          >
            {skill.icon}
            {skill.label}
          </div>
        ))}
      </section>

      {/* Deployment Skills */}
      <section className="p-2 flex gap-16 md:gap-14 justify-center flex-wrap text-lg mt-4 mb-4">
        {deployment.map((skill) => (
          <div
            key={skill.label}
            className="flex justify-center items-center flex-col"
          >
            {skill.icon}
            {skill.label}
          </div>
        ))}
      </section>
</div>
    </section>
  );
};

export default Skills;