import React, { useEffect, useState } from "react";

const Projects = () => {
  const [data, setData] = useState([
    {
      title: "Health And Wellness App",
      projectlink: "https://fit2go.netlify.app/",
      linkname: "fit2go",
      description:
        "health and wellness with features for fitness tracking nutrition planning and mental health support.",
      image: "healthandwellness.png",
    },
    {
      title: "Smart Expense Tracker",
      projectlink: "https://smartexpensetracker3.netlify.app/",
      linkname: "smartexpensetracker",
      description:
        "smart expense tracking application allows users to track their daily expenses by category and visualize spending using charts.",
      image: "expensetracker.jfif",
    },
    {
      title: "Invoice Builder",
      projectlink: "https://invoicebuilder6.netlify.app/",
      linkname: "invoicebuilder",
      description:
        "Invoice generation application using React JS that allows users to create and manage invoices dynamically.",
      image: "invoicebuild.jfif",
    },
  ]);
  return (
    <>
      <div className=" w-full h-full mx-auto bg-base-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-2 ">
        {data.map((data,index)=>{
          return(
            <div key={index} className="max-w-sm mx-auto my-3 p-6 h-fit bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img src={data.image} className=" w-64 h-48 mx-auto my-auto" alt="projectimage" />
          <div className="flex gap-2 pt-2">
            <h1 className="font-bold text-base-content">Name : </h1>
            <p className="text-primary font-semibold">
              {data.title}
            </p>
          </div>
          <div className="flex gap-2 pt-1">
            <h1 className="text-md font-bold text-base-content">
              Link :
            </h1>
            <p>
              <a
                href={data.projectlink}
                target="_blank"
                className=" cursor-pointer underline text-primary font-semibold"
              >
                {data.linkname}
              </a>
            </p>
          </div>
          <div className="flex gap-2 h-24 pt-1">
            <h1 className="text-md font-bold text-base-content">
              Description :{" "}
              <span className="text-base-content font-normal">
                {data.description}
              </span>
            </h1>
          </div>
        </div>
          )
        })}
      </div>
    </>
  );
};

export default Projects;
