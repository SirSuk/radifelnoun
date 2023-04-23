import React from 'react'
import WorkImg from "..//assets/workImg.jpeg"
import realEstate from "../assets/realestate.jpg"
import millon from "..//assets/millon.jpg"
import doce from "..//assets/12.jpg"
import netflix from "..//assets/radifilms.jpg"
import port from "..//assets/port2.png"


const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen   text-gray-300  bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-amber-400"> Work </p>
                <p className="py-6">Mira algunos de mis trabajos</p>
            </div>
    {/* Card container */}
    
           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">

                {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${mv})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div">

                     {/* Hover Effects */}
                    <div className="opacity-0 group-hover:opacity-100 mt-12">
                        <span className="text-center text-2xl font-bold text-white tracking-wider">
                          Netflix Clone Version2
                        </span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                        </a>
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>
                  </div>
                    </div>  
                </div>   
                <div    style={{backgroundImage: `url(${millon})`}}  
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div">

                     {/* Hover Effects */}
                    <div className="opacity-0 group-hover:opacity-100 mt-12">
                        <span className="text-center text-2xl font-bold text-white tracking-wider">
                          Quieres Ser Millonario
                        </span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                        </a>
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>
                  </div>
                    </div>  
                </div>   
                    <div style={{ backgroundImage: `url(${doce})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div">

                     {/* Hover Effects */}
                    <div className="opacity-0 group-hover:opacity-100 mt-12">
                        <span className="text-2xl font-bold text-white tracking-wider">
                          Portfolio Radif Elnoun
                        </span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                        </a>
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>
                  </div>
                    </div>  
                </div>   
                    <div style={{ backgroundImage: `url(${sprencia})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div">

                     {/* Hover Effects */}
                    <div className="opacity-0 group-hover:opacity-100 mt-12">
                        <span className="text-2xl font-bold text-white tracking-wider">
                          Venta de Viviendas
                        </span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                        </a>
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>
                  </div>
                    </div>  
                </div>   
                <div    style={{backgroundImage: `url(${WorkImg})`}}  
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div">

                     {/* Hover Effects */}
                    <div className="opacity-0  group-hover:opacity-100 mt-12">
                        <span className="text-2xl font-bold text-white tracking-wider">
                                ANGULAR API CRUD BOOTSTRAP
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${memorygame})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div">

                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 mt-12">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Fullstack .NET ANGULAR BOOTSTRAP Survey App
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${opinlab})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div">

                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 mt-12">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Fullstack .NET ANGULAR BOOTSTRAP Survey App
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                <div    style={{backgroundImage: `url(${port})`}}  
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div">

                     {/* Hover Effects */}
                    <div className="opacity-0 group-hover:opacity-100 mt-12">
                        <span className="text-2xl font-bold text-white tracking-wider">
                          Portfolio Bootstrap
                        </span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                        </a>
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>
                  </div>
                    </div>  
                </div>   
            </div>        
            </div>
           </div>
 
    
  )
}

export default Work
