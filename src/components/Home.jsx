import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'



const Home = () => {
  return (
    <div name="home" className="flex w-full h-screen bg-[#0a192f]">

      {/*Contenedor*/}

      <div className="my-3 max-w-[1000px] mx-auto py-0 px-4 flex flex-col justify-center gap-3 h-screen">

        <p className="text-amber-400 text-2xl"> Hola, mi nombre es:</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"> Radif El Noun</h1>
        <h2 className="text-2xl sm:text-7xl font-bold text-[#8892b0]">  Fullstack Developer </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-lg"> Programador autodidacta, especialidad en STACK MERN con Javascript, gusto por el diseño y conocimientos y cualidades UX/UI </p>


        <button className="rounded group max-w-[200px] text-white border-2 px-6 py-3 my-2 flex items-center background hover:bg-amber-400 hover:border-amber-400 hover:text-sky-800 text-lg"> View work
          <span className="group-hover:rotate-120 duration 400">
            <HiArrowNarrowRight className="ml-18" /></span>
        </button>
      </div>
    </div>

  )
}

export default Home