import React from "react";
import Css from "../assets/css.png"
import Firebase from "../assets/firebase.png"
import Github from "../assets/github.png"
import Html from "../assets/html.png"
import Javascript from "../assets/javascript.png"
import ReactImg from "../assets/react.png"
import Tailwind from "../assets/tailwind.png"

const Skills = () => {
    return(
        <div name="skills" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
            <div className="lg:max-w-[900px] xl:max-w-[1000px] xl:mx-auto lg:mx-[100px] p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#B64EFF]">Skills</p>
                    <p className="py-4">These are the technologies I've worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-7 sm:py-4 text-center items-center">
                    <div className="rounded-md shadow-md shadow-[#040c16] hover:scale-105 duration-200">
                        <img className="mt-5 mx-auto w-20" src={Html} alt="Html icon"/>
                        <p className="py-3">HTML</p>
                    </div>
                    <div className="rounded-md shadow-md shadow-[#040c16] hover:scale-105 duration-200">
                        <img className="mt-5 mx-auto w-20" src={Css} alt="Html icon"/>
                        <p className="py-3">CSS</p>
                    </div>
                    <div className="rounded-md shadow-md shadow-[#040c16] hover:scale-105 duration-200">
                        <img className="mt-5 mx-auto w-20" src={Javascript} alt="Html icon"/>
                        <p className="py-3">JavaScript</p>
                    </div>
                    <div className="rounded-md shadow-md shadow-[#040c16] hover:scale-105 duration-200">
                        <img className="mt-5 mx-auto w-20" src={Tailwind} alt="Html icon"/>
                        <p className="py-3">Tailwind</p>
                    </div>
                    <div className="rounded-md shadow-md shadow-[#040c16] hover:scale-105 duration-200">
                        <img className="mt-5 mx-auto w-20" src={ReactImg} alt="Html icon"/>
                        <p className="py-3">React Js</p>
                    </div>
                    <div className="rounded-md shadow-md shadow-[#040c16] hover:scale-105 duration-200">
                        <img className="mt-5 mx-auto w-20" src={Firebase} alt="Html icon"/>
                        <p className="py-3">Firebase</p>
                    </div>
                    <div className="rounded-md shadow-md shadow-[#040c16] hover:scale-105 duration-200">
                        <img className="mt-5 mx-auto w-20" src={Github} alt="Html icon"/>
                        <p className="py-3">GitHub</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills;