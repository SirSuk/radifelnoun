import React from 'react';


const About = () => {
  return (
    <div name="about" className="w-full h-full bg-[#0a192f] text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">         
          <div className="sm:text-right pb-8 pl-4"> 
            <p className="text-4xl font-bold inline border-b-4 border-amber-400 ">
                About</p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
                <div className="sm:text-right text-4xl font-bold ">
                    <p> Hola, soy Radif, encantado, echa un vistazo por aqui..</p>
                </div>
                <div>
                <p className="text-xl font-light">
                Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum.
                </p>
                </div>
          
        </div>
      </div>
    </div>
  )
}

export default About

