import CSS from '..//assets/css.png'
import Angular from '..//assets/ang.png'
import JavaScript from '..//assets/javascript.png'
import ReactImg from '..//assets/react.png'
import Node from '..//assets/node.png'
import Boot from '..//assets/boot-removebg-preview.png'
import Net from '..//assets/NET_Core_Logo.svg.png'
import Tailwind from '..//assets/tailwind.png'
import Mongo from '..//assets/mongo.png'
import Git from '..//assets/git.png'
import Mysql from '..//assets/mysql.png'
import Sass from '..//assets/sass.png'
import HTML from '..//assets/htm.png'
import Csharp from '..//assets/csharp.png'
import SqlAzure from '..//assets/azure-sql-database.png'
import Entity from '..//assets/entity-framework-tutorial.png'

const Skills = () => {
  return (
    <div id="skills" className=" w-full h-full p-8  bg-[#0a192f] text-gray-300">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-3xl  font-bold inline border-b-4 border-amber-400 "> Skills </p>
          <p className="mt-2 text-xl py-4">Frontend</p>
        </div>

        <div className="w-full grid grid-cols-4 md:grid-cols-4 gap-5 text-center py-4">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4 text-sm">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={Angular} alt="Angular icon" />
            <p className="my-4 text-sm">Angular</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={JavaScript} alt="JAVASCRIPT icon" />
            <p className="my-4 text-sm">Javascript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={Tailwind} alt="TAILWIND icon" />
            <p className="my-4 text-sm">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mt-2 mx-auto" src={Sass} alt="Sass icon" />
            <p className="my-4 text-sm">SASS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={Boot} alt="Bootstrap icon" />
            <p className="my-4 text-sm">Bootstrap</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={CSS} alt="css icon" />
            <p className="my-4 text-sm">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4 text-sm">HTML</p>
          </div>

        </div>

        {/*backend tools*/}
        <p className="py-4 text-xl">Backend/Tools</p>
        <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-5 text-center py-4">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={Csharp} alt="Csharp icon" />
            <p className="my-4 text-sm">Csharp</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={Net} alt="NET icon" />
            <p className="my-4 text-sm">NET</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4 text-sm">Node</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={Mysql} alt="Mysql icon" />
            <p className="my-4 text-sm">Mysql</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={Entity} alt="Entity icon" />
            <p className="my-4 text-sm">Entity</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={SqlAzure} alt="SqlAzure" />
            <p className="my-4 text-sm">SqlAzure</p>
          </div>


          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={Mongo} alt="MONGO icon" />
            <p className="my-4 text-sm">MONGO</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={Git} alt="Git icon" />
            <p className="my-4 text-sm">Git</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills