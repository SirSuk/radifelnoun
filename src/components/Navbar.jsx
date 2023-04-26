import React, { useState } from 'react'
import Logo from '..//assets/fe.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { Link } from "react-scroll"


const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[200px] flex justify-between items-center px-10 bg-[#0a192f] text-gray-300 " style={{ zIndex: 999 }}>
      <div>
        <img className="mt-10 ml-5" src={Logo} alt="LogoImage" style={{ width: "286px" }} />
      </div>

      {/*menu*/}
      <ul className="hidden md:flex gap-5 ">
        <li className="text-xl hover:text-amber-400">
          <Link to="home" smooth={true} duration={500} offset={-100}>
            Home
          </Link>
        </li>

        <li className="text-xl hover:text-amber-400">
          <Link to="skills" smooth={true} duration={500} offset={-250}>
            Skills
          </Link>
        </li>
        <li className="text-xl hover:text-amber-400">
          <Link to="work" smooth={true} duration={500} offset={-200}>
            Work
          </Link>
        </li>
        <li className="text-xl hover:text-amber-400">
          <Link to="about" smooth={true} duration={500} offset={-250}>
            About
          </Link>
        </li>
        <li className="text-xl hover:text-amber-400">
          <Link to="contact" smooth={true} duration={500} offset={-90}>
            Contact
          </Link>
        </li>
      </ul>


      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile Menu*/}
      <ul className={!nav ? "hidden" : "bg-[#0a192f] absolute top-0 left-0 w-full h h-screen flex flex-col justify-center items-center"}>
        <li onClick={handleClick} className="py-6 text-4xl">
          <a href="#home" onClick={handleClick} smooth={true} duration={500} offset={0}>Home</a>
        </li>
        <li onClick={handleClick} className="py-6 text-4xl">
          <a href="#about" onClick={handleClick} smooth={true} duration={500} offset={-50}>About</a>
        </li>
        <li onClick={handleClick} className="py-6 text-4xl">
          <a href="#skills" onClick={handleClick} smooth={true} duration={500} offset={0}>Skills</a>
        </li>
        <li onClick={handleClick} className="py-6 text-4xl">
          <a href="#work" onClick={handleClick} smooth={true} duration={500} offset={0}>Work</a>
        </li>
        <li onClick={handleClick} className="py-6 text-4xl">
          <a href="#contact" onClick={handleClick} smooth={true} duration={500} offset={0}>Contact</a>
        </li>
      </ul>

      {/*Social Icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>

          <li className="px-4 w-[180px] h-[50px] flex justify-between items-center ml-[-120px]  hover:ml-[-10px] duration-600 bg-blue-600">
            <a className="flex justify-between items-center  pt-[-50px] w-full text-gray-300" href="https://www.linkedin.com/in/radifelnoun/" target="_blank" rel="noopener noreferrer">
              Linkedin <FaLinkedin onClick={() => window.location.href = "https://www.linkedin.com/in/radifelnoun/"} size={30} />
            </a>
          </li>
          <li className="px-4 w-[180px] h-[50px] flex justify-between items-center ml-[-120px]  hover:ml-[-10px] duration-600 bg-[#333333]">
            <a className="flex justify-between items-center  pt-[-50px] w-full text-gray-300" href="https://github.com/SirSuk" target="_blank" rel="noopener noreferrer">
              Github <FaGithub onClick={() => window.location.href = "https://github.com/SirSuk"} size={30} />
            </a>
          </li>
          <li className="px-4 w-[180px] h-[50px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-600 bg-[#3b8071]">
            <a className="flex justify-between items-center  pt-[-50px] w-full text-gray-300" href={`mailto:siriosukur@gmail.com?subject=Subject&body=Body`} target="_blank" rel="noopener noreferrer">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="px-4 w-[180px] h-[50px] flex justify-between items-center ml-[-120px]  hover:ml-[-10px] duration-600 bg-[#565f69]">
            <a className="flex justify-between items-center  pt-[-50px] w-full text-gray-300" href="https://radifelnoun.tiiny.site/" target="_blank" rel="noopener noreferrer">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div >

  );
}

export default Navbar