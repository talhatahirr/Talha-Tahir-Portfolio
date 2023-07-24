import React from "react";
import {HiArrowNarrowRight} from "react-icons/hi";
import Work from "./Work";
import {Link} from "react-scroll"
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaInstagram} from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

const Home = () => {
    return(
        <div name="home" className="bg-[#0a192f] w-full h-screen">
            <div className="max-w-[1000px] xl:mx-auto lg:mx-[100px] px-8 flex flex-col justify-center h-full">
                <p className="text-[#B64EFF]">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Talha Tahir</h1>
                <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">I'm a Front-End Developer</h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]">A skilled front-end developer proficient in React Js, HTML, CSS, Tailwind and JavaScript, experienced in creating 
                visually appealing and user-friendly interfaces to enhance the user experience and optimize website performance.</p>
                <div className="flex">
                    <li className="text-white group border-2 px-4 py-3 my-2 flex items-center hover:bg-[#B64EFF] hover:border-[#B64EFF] duration-100 rounded-lg">
                        <Link to="work" smooth={true} duration={500}>
                            View Work
                        </Link>
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-2"/>
                        </span>
                    </li>
                </div>
            </div>
            <div className="lg:hidden flex flex-row items-center justify-center border-gray-300">
                <li className="w-[60px] h-[60px] flex justify-between items-center rounded-lg bg-blue-600">
                    <a className="flex justify-between items-center w-full text-gray-300"
                        href="https://www.linkedin.com/in/talha-tahir-b03955262/">
                        <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className="w-[60px] h-[60px] flex justify-between items-center sm:ml-[60px] ml-[30px] rounded-lg bg-[#333333]">
                        <a className="flex justify-between items-center w-full text-gray-300"
                        href="https://github.com/talhatahirr">
                            <FaGithub size={30}/>
                        </a>
                </li>
                    <li className="w-[60px] h-[60px] flex justify-between items-center sm:ml-[60px]  ml-[30px] rounded-lg bg-red-500 ">
                        <a className="flex justify-between items-center w-full text-gray-300"
                        href="https://www.instagram.com/talhatahirr_/">
                            <FaInstagram size={30}/>
                        </a>
                    </li>
                    <li className="w-[60px] h-[60px] flex justify-between items-center sm:ml-[60px]  ml-[30px] rounded-lg bg-[#565f69]">
                        <a className="flex justify-between items-center w-full text-gray-300"
                        href="https://drive.google.com/file/d/1nNFGxKiG8BZEUZsmg6QQL_8GKCfYxzTj/view?usp=sharing">
                            <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
            </div>
        </div>
    )
}

export default Home;