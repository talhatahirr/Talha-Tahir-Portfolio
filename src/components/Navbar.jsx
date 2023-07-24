import React, {useState} from "react"
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaInstagram} from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import Logo from "../assets/logo.png"
import {Link} from "react-scroll"

const Navbar = () => {
    const [menuDec, setmenuDec] = useState(false);
    const menuDecClick = () => setmenuDec(!menuDec);

    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src={Logo} alt="Logo" style={{width: '35%'}}/>
            </div>
            <ul className="hidden sm:flex">
                <li className="hover:text-[#B64EFF] duration-100">
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="hover:text-[#B64EFF] duration-100">
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="hover:text-[#B64EFF] duration-100">
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="hover:text-[#B64EFF] duration-100">
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className="hover:text-[#B64EFF] duration-100">
                    <Link to="contact" smooth={true} duration={500}>
                        Contact Me
                    </Link>
                </li>
            </ul>

            <div onClick={menuDecClick} className="sm:hidden z-10">
                {
                    !menuDec ? <FaBars/> : <FaTimes/>
                }
            </div>
            <ul className={!menuDec ? 'hidden' : 'sm:hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className="py-6 text-3xl hover:text-[#B64EFF] duration-100">
                    <Link onClick={menuDecClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-3xl hover:text-[#B64EFF] duration-100">
                    <Link onClick={menuDecClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-3xl hover:text-[#B64EFF] duration-100">
                    <Link onClick={menuDecClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-3xl hover:text-[#B64EFF] duration-100">
                    <Link onClick={menuDecClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className="py-6 text-3xl hover:text-[#B64EFF] duration-100">
                    <Link onClick={menuDecClick} to="contact" smooth={true} duration={500}>
                        Contact Me
                    </Link>
                </li>
            </ul>
            <div className="hidden lg:flex fixed flex-col top-[33%] left-0">
                <ul>
                    <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-90px] xl:hover:ml-[-10px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300"
                        href="https://www.linkedin.com/in/talha-tahir-b03955262/">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-90px] xl:hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a className="flex justify-between items-center w-full text-gray-300"
                        href="https://github.com/talhatahirr">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-90px] xl:hover:ml-[-10px] duration-300 bg-red-500 ">
                        <a className="flex justify-between items-center w-full text-gray-300"
                        href="https://www.instagram.com/talhatahirr_/">
                            Instagram <FaInstagram size={30}/>
                        </a>
                    </li>
                    <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-90px] xl:hover:ml-[-10px] duration-300 bg-[#489181]">
                        <a className="flex justify-between items-center w-full text-gray-300"
                        href="/">
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-90px] xl:hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a className="flex justify-between items-center w-full text-gray-300"
                        href="https://drive.google.com/file/d/1nNFGxKiG8BZEUZsmg6QQL_8GKCfYxzTj/view?usp=sharing">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;