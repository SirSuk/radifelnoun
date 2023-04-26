import React from 'react'
import CSS from '..//assets/css.png'
import JavaScript from '..//assets/javascript.png'
import HTML from '..//assets/htm.png'
import sprencia from "..//assets/sprenciapic.png"
import opinlab from "../assets/opinLAB.png"
import got from "../assets/got.png"
import platziStore from "../assets/platziAPI.png"
import netflix from "..//assets/ntf.png"
import mil from "..//assets/mil.png"
import met from "..//assets/met.png"
import todohuerta from "..//assets/todoapp-mododia.jpg"
import memorygame from "..//assets/animalmemorygame.jpg"
import Angular from '..//assets/ang.png'
import ReactImg from '..//assets/react.png'
import Node from '..//assets/node.png'
import Boot from '..//assets/boot-removebg-preview.png'
import Tailwind from '..//assets/tailwind.png'

import Mysql from '..//assets/mysql.png'
import Framer from '..//assets/FRAM.png'
import Firebase from '..//assets/firebase.png'
import Csharp from '..//assets/csharp.png'
const Work = () => {
    return (
        <div id="work" className="w-full md:h-screen  pt-24  text-gray-300  bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-amber-400"> Work </p>
                    <p className="py-6">I enjoy creating new apps, this is just an appetizer.</p>
                </div>


                {/* Card container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">

                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${opinlab})` }}
                        className="shadow-lg border border-solid shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div">

                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 mt-3 text-center">
                            <span className="text-xl font-bold text-white tracking-wider">
                                OpinLab Surveys</span>
                            <div className="flex mt-2">
                                <img className="icon" src={Csharp} alt="Csharp" />
                                <img className="icon" src={Mysql} alt="Mysql" />
                                <img className="icon" src={Angular} alt="Angular" />
                                <img className="icon" src={Boot} alt="Boot" />
                            </div>
                            <div>
                                <p className="text-[12px] w-30 pt-2 px-2">Application of internal surveys among employees, working with a team enviroment , agile methodology(SCRUM).NET, entity framework, SQL, Angular, Bootstrap.</p>
                            </div>
                            <div className="pt-2 text-center">
                                <a href="https://youtu.be/EGiRlQ14LDc" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Video</button>
                                </a>
                                <a href="https://dev.azure.com/BRAVENT-DEADPOOL/BRAVENT-DEADPOOL" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${met})` }}
                        className="shadow-lg shadow-[#040c16] group border border-solid container rounded-md flex justify-center mx-auto content-div">

                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-90 mt-3 text-center">
                            <span className="text-xl font-bold text-white tracking-wider">
                                Discover Metaverse</span>
                            <div className="flex mt-2">
                                <img className="icon" src={ReactImg} alt="ReactImg" />
                                <img className="icon" src={Tailwind} alt="Tailwind" />
                                <img className="icon" src={Framer} alt="Framer" />
                            </div>
                            <div>
                                <p class="text-[12px] w-30 pt-2 px-2">Welcome to my React/FM website, where you can immerse yourself in a dreamlike world of stunning animations and transitions. <br /> Loving this new way of creating! </p>
                            </div>
                            <div className="pt-2 text-center">
                                <a href="https://metaverso-hncqhou44-sirsuk.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/SirSuk/metaverso" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${mil})` }}
                        className="shadow-lg border border-solid shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div">

                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 mt-3 text-center">
                            <span className="text-xl font-bold text-white tracking-wider">
                                Wannabe Millonarie?</span>
                            <div className="flex mt-2">
                                <img className="icon" src={ReactImg} alt="ReactImg" />
                                <img className="icon" src={Tailwind} alt="Tailwind" />
                                <img className="icon" src={CSS} alt="CSS" />
                            </div>
                            <div>
                                <p className="text-[12px] w-30 pt-2 px-2">Enjoy an exciting game that puts the player in the hot seat of a TV game show. Created using React and TailwindCSS. It has sound effects, and an immersive atmosphere, enjoy!</p>
                            </div>
                            <div className="pt-2 text-center">
                                <a href="https://millonario-gules.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/SirSuk/Quieres-ser-millonario-" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>



                    <div style={{ backgroundImage: `url(${memorygame})` }}
                        className="shadow-lg border border-solid shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div">

                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 mt-3 text-center">
                            <span className="text-xl font-bold text-white tracking-wider">
                                Pairs Game- Vanilla JS</span>
                            <div className="flex mt-2">
                                <img className="icon" src={HTML} alt="HTML" />
                                <img className="icon" src={CSS} alt="CSS" />
                                <img className="icon" src={JavaScript} alt="JavaScript" />
                            </div>
                            <div>
                                <p className="text-[12px] w-30 pt-2 px-2">The memory pairs JavaScript game is a classic memory-matching game where players are challenged to match pairs of cards within a grid of face-down cards. Enjoy this game!</p>
                            </div>
                            <div className="pt-2 text-center">
                                <a href="https://memorygame-v2.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/SirSuk/memorygame-v2" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${sprencia})` }}
                        className="shadow-lg border border-solid shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div">

                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 mt-3 text-center">
                            <span className="text-xl font-bold text-white tracking-wider">
                                Sprencia Fullstack APP</span>
                            <div className="flex mt-2">
                                <img className="icon" src={Node} alt="ReactImg" />
                                <img className="icon" src={Angular} alt="Tailwind" />
                                <img className="icon" src={Boot} alt="Framer" />
                            </div>
                            <div>
                                <p className="text-[12px] w-30 pt-2 px-2">Node.js/Angular full-stack app for selling courses and activities is a web app that allows users to browse, purchase, and participate in various activities offered by a provider. </p>
                            </div>
                            <div className="pt-2 text-center">
                                <a href="https://next-metaverse-framermotion.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/SirSuk/metaverse-Nextjs" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${got})` }}
                        className="shadow-lg border border-solid shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div">

                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 mt-3 text-center">
                            <span className="text-xl font-bold text-white tracking-wider">
                                Game of Thrones API project</span>
                            <div className="flex mt-2">
                                <img className="icon" src={HTML} alt="HTML" />
                                <img className="icon" src={Boot} alt="CSS" />
                                <img className="icon" src={Angular} alt="JavaScript" />
                            </div>
                            <div>
                                <p className="text-[12px] w-30 pt-2 px-2">This app fetches data from the Game of Thrones API and provides users with character, house, and episode information. </p>
                            </div>
                            <div className="pt-2 text-center">
                                <a href="https://memorygame-v2.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/SirSuk/memorygame-v2" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${platziStore})` }}
                        className="shadow-lg border border-solid shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div">

                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 mt-3 text-center">
                            <span className="text-xl font-bold text-white tracking-wider">
                                PlatziStore APP</span>
                            <div className="flex mt-2">
                                <img className="icon" src={Angular} alt="ReactImg" />
                                <img className="icon" src={Tailwind} alt="Tailwind" />
                                <img className="icon" src={Firebase} alt="Firebase" />

                            </div>
                            <div>
                                <p className="text-[12px] w-30 pt-2 px-2"> Developed using the Platzi API to fetch data and includes features such as user login, product creation, and user management.</p>
                            </div>
                            <div className="pt-2 text-center">
                                <a href="https://platzi-store-proyec.vercel.app/home" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/SirSuk/platziStoreProyect" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${todohuerta})` }}
                        className="shadow-lg  border border-solid shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div">

                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 mt-3 text-center">
                            <span className="text-xl font-bold text-white tracking-wider">
                                Todo APP Hortelano</span>
                            <div className="flex mt-2">
                                <img className="icon" src={Angular} alt="Angular" />
                                <img className="icon" src={Boot} alt="Bootstrap" />
                                <img className="icon" src={CSS} alt="CSS" />
                            </div>
                            <div>
                                <p className="text-[12px] w-30 pt-2 px-2">Welcome to HuertaAPP. I created this app to assist me in managing my crops, tracking planting times, and monitoring my sowing activities.</p>
                            </div>
                            <div className="pt-2 text-center">
                                <a href="https://todohuerta-m7c0v00aj-sirsuk.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/SirSuk/todohuerta" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${netflix})` }}
                        className="shadow-lg border border-solid shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div">

                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 mt-3 text-center">
                            <span className="text-xl font-bold text-white tracking-wider">
                                Netflix Clone App</span>
                            <div className="flex mt-2">
                                <img className="icon" src={ReactImg} alt="ReactImg" />
                                <img className="icon" src={Tailwind} alt="Tailwind" />
                                <img className="icon" src={Firebase} alt="Firebase" />

                            </div>
                            <div>
                                <p className="text-[12px] w-30 pt-2 px-2">The React Netflix clone app is built using the React JavaScript library, and it provides a user-friendly interface for browsing and watching movies and TV shows.</p>
                            </div>
                            <div className="pt-2 text-center">
                                <a href="https://radifilms.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/SirSuk/Netflix-Clone" target="_blank" rel="noopener noreferrer">
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
