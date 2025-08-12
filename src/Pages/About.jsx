import React, { useState } from "react";

const About = () => {
  const [frontendSkill , setFrontendSkill] = useState([
    {
      name: "Html5",
      image: "html5-original-wordmark.svg",
    },
    {
      name: "Css3",
      image: "css3-original-wordmark.svg",
    },
    {
      name: "Javascript",
      image: "javascript-original.svg",
    },
    {
      name: "React Js",
      image: "react-original-wordmark.svg",
    },
    {
      name: "Redux",
      image: "redux-original.svg",
    },
    {
      name: "Tailwind Css",
      image: "tailwind-css-wordmark.svg",
    },
    {
      name: "Bootstrap",
      image: "bootstrap-plain-wordmark.svg",
    },
    {
      name: "Chart Js",
      image: "chart js.png",
    },
    {
      name: "jsPdf",
      image: "jspdf.png",
    },

  ])
  const [backendSkill , setBackendSkill] = useState([
    {
      name: "Node Js",
      image: "nodejs-original-wordmark.svg",
    },
    {
      name: "Express js",
      image: "express-original-wordmark.svg",
    },
    {
      name: "Bcrypt",
      image: "bcrypt.jfif",
    },
    {
      name: "JWT",
      image: "jsonwebtoken.png",
    },
    {
      name: "Cron Job",
      image: "cronjob.png",
    },
    {
      name: "Dotenv",
      image: "dotenv.png",
    },
    {
      name: "Postman",
      image: "postman.svg",
    },
    
    {
      name: "MongoDb",
      image: "mongodb-original-wordmark.svg",
    },
    {
      name: "Mysql",
      image: "mysql-original-wordmark.svg",
    },

  ])
  return (
    <>
      <div className=" w-full h-full grid bg-base-200  ">
        <h1 className="flex justify-center text-primary font-bold text-3xl">Front-end Skills</h1>
        <div className=" mx-auto gap-3 grid sm:grid-cols-4  lg:flex">
          {frontendSkill.map((skills)=>{
          return(
            <div className=" w-32 h-32 mx-auto my-6 bg-white border border-gray-200 hover:border-primary  rounded-lg shadow-sm hover:shadow-primary hover:text-primary dark:bg-gray-800 dark:border-gray-700 ">
              <div className="grid justify-center pt-3">
                <img src={skills.image} alt={skills.name} className="w-16 h-16" />
              <h1 className="pt-2 font-bold">
                {skills.name}
              </h1>
              </div>
            </div>
          )
        })}
        </div>
        <h1 className="flex justify-center text-primary font-bold text-3xl">Back-end Skills</h1>
        <div className="mx-auto gap-3 grid sm:grid-cols-4  lg:flex">
          {backendSkill.map((skills)=>{
          return(
            <div className="w-32 h-32 mx-auto my-6  bg-white border border-gray-200 hover:border-primary  rounded-lg shadow-sm hover:shadow-primary hover:text-primary dark:bg-gray-800 dark:border-gray-700 ">
              <div className="grid justify-center pt-3">
                <img src={skills.image} alt={skills.name} className="w-16 h-16" />
              <h1 className="pt-2 font-bold">
                {skills.name}
              </h1>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </>
  );
};

export default About;
