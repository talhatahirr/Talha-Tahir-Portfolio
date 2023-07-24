import React from "react";
import Working from "../assets/projects/work11.png"
import realEstate from "../assets/projects/work2.png"
import work3 from "../assets/projects/work3.PNG"

const Work = () => {
    return(
        <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="lg:max-w-[900px] xl:max-w-[1000px] lg:mx-[100px] xl:mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#B64EFF]">Work</p>
                    <p className="py-4">Check out some of my recent projects</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="flex flex-col justify-center items-center">
                        <div style={{backgroundImage: `url(${Working})`}} className="group container flex shadow-lg rounded-lg shadow-[#040c16] justify-center items-center mx-auto content-div">
                            <div className="opacity-0 group-hover:opacity-100 duration-300 flex flex-col items-center">
                                <span className="text-2xl font-bold text-white tracking-wider">
                                    React Js Application
                                </span>
                                <div className="mt-4">
                                    <a href="https://github.com/talhatahirr/Mehfooz-Ghar-Final-Year-Project.git">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h2 className="pt-4 text-1.5xl text-gray-300">Mehfooz Ghar</h2>
                        <p className="pt-2 text-center text-[10px] text-gray-300">Mehfooz Ghar is a freelance web application platform 
                        for the healthcare workers. It's a modernly designed website with a fluid user interface.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div style={{backgroundImage: `url(${work3})`}} className="group container shadow-lg rounded-lg shadow-[#040c16] flex justify-center items-center mx-auto content-div">
                            <div className="opacity-0 group-hover:opacity-100 duration-300 flex flex-col items-center">
                                <span className="text-2xl font-bold text-white tracking-wider">
                                    React Js Application
                                </span>
                                <div className="mt-4">
                                    <a href="/">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h2 className="pt-4 text-1.5xl text-gray-300">Portfolio</h2>
                        <p className="pt-2 text-center text-[10px] text-gray-300">It's a modernly designed website with a fluid user interface just to showcase my portfolio.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div style={{backgroundImage: `url(${realEstate})`}} className="group container shadow-lg rounded-lg shadow-[#040c16] flex justify-center items-center mx-auto content-div">
                            <div className="opacity-0 group-hover:opacity-100 duration-300 flex flex-col items-center">
                                <span className="text-2xl font-bold text-white tracking-wider">
                                    React Js Application
                                </span>
                                <div className="mt-4">
                                    <a href="https://github.com/talhatahirr/Ocean-of-Movies.git">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h2 className="pt-4 text-1.5xl text-gray-300">Ocean of Movies</h2>
                        <p className="pt-2 text-center text-[10px] text-gray-300">A user can search the latest/ oldest movies 
                        of his/her own choice on Ocean of Movies. It's a modernly designed website with a fluid user interface.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;