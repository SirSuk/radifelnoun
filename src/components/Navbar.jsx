import React, { useState } from 'react'
import Logo from '..//assets/fe.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin, } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { Link } from "react-scroll"



const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[200px] flex justify-between items-center px-10 bg-[#0a192f] text-gray-300">
      <div>
        <img className="mt-10 ml-5" src={Logo} alt="LogoImage" style={{ width: "286px" }} />
      </div>

      {/*menu*/}
      <ul className="hidden md:flex gap-5 ">
        <li className="text-xl hover:text-amber-400">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-xl hover:text-amber-400">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="text-xl hover:text-amber-400">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="text-xl hover:text-amber-400">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="text-xl hover:text-amber-400">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>


      {/*Hamburguer*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile Menu*/}
      <ul className={!nav ? "hidden" : "bg-[#0a192f] absolute top-0 left-0 w-full h h-screen flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">Proyectos</li>
        <li className="py-6 text-4xl">Stack</li>
        <li className="py-6 text-4xl">Yo</li>
        <li className="py-6 text-4xl">Contacto</li>

      </ul>

      {/*Social Icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="px-4 w-[180px] h-[50px] flex justify-between items-center ml-[-120px]  hover:ml-[-10px] duration-600 bg-blue-600">
            <a className="flex justify-between items-center  pt-[-50px] w-full text-gray-300" href="/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="px-4 w-[180px] h-[50px] flex justify-between items-center ml-[-120px]  hover:ml-[-10px] duration-600 bg-[#333333]">
            <a className="flex justify-between items-center  pt-[-50px] w-full text-gray-300" href="/">
              Github <FaGithub onClick={"www.google.es"} size={30} />
            </a>
          </li>
          <li className="px-4 w-[180px] h-[50px] flex justify-between items-center ml-[-120px]  hover:ml-[-10px] duration-600 bg-[#3b8071]">
            <a className="flex justify-between items-center  pt-[-50px] w-full text-gray-300" href="/">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="px-4 w-[180px] h-[50px] flex justify-between items-center ml-[-120px]  hover:ml-[-10px] duration-600 bg-[#565f69]">
            <a className="flex justify-between items-center  pt-[-50px] w-full text-gray-300" href="/">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default Navbar