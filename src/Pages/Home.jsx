import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className=" w-full h-full md:h-lvh mx-auto bg-base-200 grid grid-cols-1 justify-center gap-2 md:flex md:gap-2">
        <div className="w-2/4 h-7/8 mx-auto p-4 flex justify-center ">
          <div className="p-6  w-auto h-auto bg-base-200 rounded-lg flex flex-col justify-center  dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mt-2 sm:text-xl md:text-2xl font-bold md:tracking-tight text-start text-primary dark:text-white">
              Full Stack Web Developer
            </h5>
            <p className="mt-3 font-normal text-base-content dark:text-gray-400">
              I’m a Full Stack Web Developer transitioning from a background in
              Electrical and Electronics Engineering. With a strong foundation
              in problem-solving and systems thinking, I now build modern web
              applications using HTML5, CSS3, React.js, Node.js, Express, and
              MongoDB. Passionate about technology and continuous learning, I’ve
              shifted my focus to software development to create impactful
              digital solutions that blend functionality with user experience.
            </p>
            <div className="mt-3 flex  gap-2">
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-base-content cursor-pointer hover:text-primary-content shadow-md bg-base-300 rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <Link to="/projects">Explore My Projects</Link>
              </button>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center cursor-pointer text-primary-content bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Download Cv
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/4 h-6/7 mx-auto p-4 mt-2 flex justify-center">
          <img
            src="vengat.png"
            alt="vengatesan"
            className="rounded-lg shadow-lg hover:ease-in-out"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
