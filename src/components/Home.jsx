import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  return (
    <div id="home" className="flex w-full  pt-24 bg-[#0a192f]">

      {/*Contenedor*/}

      <div className="max-w-[1200px] mx-auto py-0 px-2 flex flex-col justify-center gap-2 h-screen">
        <p className="text-amber-400 text-2xl"> Hey <FontAwesomeIcon icon={faHand} className="hidden lg:inline text-amber-400 animate-shake mx-2 text-3xl" />, my name is</p>
        <h1 className="text-5xl sm:text-7xl font-bold text-[#ccd6f6]"> Radif El Noun</h1>
        <h2 className="text-3xl sm:text-7xl font-bold text-[#8892b0]">  Fullstack Developer </h2>
        <p className="text-[#8892b0] py-4 max-w-[800px] text-lg"> Madrid-based web developer looking for a junior remote or hybrid position in frontend, backend, or fullstack development. I'm a versatile team player with strong skills in both POO and functional programming. </p>

        <button className="rounded group max-w-[200px] text-white border-2 px-6 py-3 my-2 flex items-center background hover:bg-amber-400 hover:border-amber-400 hover:text-sky-800 text-lg" onClick={() => window.open("https://radifelnoun.tiiny.site/", "_blank")}>
          Resume
          <span className="group-hover:rotate-120 duration-400">
            <HiArrowNarrowRight className="ml-18" />
          </span>
        </button>

      </div>

    </div>

  )
}

export default Home