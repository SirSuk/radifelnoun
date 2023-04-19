import React from 'react';
import HTML from '..//assets/html.png'
import CSS from '..//assets/css.png'
import JavaScript from '..//assets/javascript.png'
import ReactImg from '..//assets/react.png'
import Node from '..//assets/node.png'
import Firebase from '..//assets/firebase.png'
import AWS from '..//assets/aws.png'
import GitHub from '..//assets/github.png'
import Tailwind from '..//assets/tailwind.png'
import Mongo from '..//assets/mongo.png'
import Git from '..//assets/git.png'
import Mysql from '..//assets/mysql.png'

const Skills = () => {
  return (
    <div name="skills" className=" w-full h-full bg-[#0a192f] text-gray-300">
      {/*container*/}
      <div className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div >
          <p className="text-3xl  font-bold inline border-b-4 border-amber-400 "> Skills </p>
          <p className="py-4">These are the tecnlogies I've wordked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="JAVASCRIPT icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="AWS icon" />
            <p className="my-4">AWS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GITHUB icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="TAILWIND icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="MONGO icon" />
            <p className="my-4">MONGO</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Firebase} alt="Firebase icon" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Git} alt="Git icon" />
            <p className="my-4">Git</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mysql} alt="Mysql icon" />
            <p className="my-4">Mysql</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills