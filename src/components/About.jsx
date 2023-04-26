import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';


const About = () => {
  return (
    <div id="about" className="w-full h-full bg-[#0a192f] pt-40  text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 mb-2 border-amber-400 ">
              About</p>
          </div>

        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div>
            <p className="text-xl font-bold">
              <FontAwesomeIcon icon={faBriefcase} className="hidden lg:inline text-amber-400  mx-2 text-3xl" /> Relevant experience and tools:
            </p>
            <ul className="mt-3 p-2">
              <li className="text-sm"><span class="text-2xl">A</span>gile methodology (SCRUM)</li>
              <li className="text-sm"><span class="text-2xl">T</span>eam collaboration (GIT, Azure DevOps)</li>
              <li className="text-sm"><span class="text-2xl">R</span>esponsive design and cross-browser compatibility</li>
              <li className="text-sm"><span class="text-2xl">E</span>ntity Framework,Dapper, SOLID principes.</li>
              <li className="text-sm"><span class="text-2xl">R</span>estful APIs and microservices architecture</li>
              <li className="text-sm"><span class="text-2xl">S</span>ecurity best practices and web application vulnerabilities</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold">
              <FontAwesomeIcon icon={faGraduationCap} className="hidden lg:inline text-amber-400  mx-2 text-3xl" /> Studies and Courses:
            </p>
            <ul className="mt-3 p-2">
              <li className="text-sm"><span class="text-2xl">B</span>ootcamp Fullstack Web + .NET. 600 hours</li>
              <li className="text-sm"><span class="text-2xl">H</span>igher level training cycle(ASIR).2 years. Madrid.</li>
              <li className="text-sm"><span class="text-2xl">M</span>edium level training cycle(ESI).2 years. Madrid.</li>
              <li className="text-sm"><span class="text-2xl">J</span>avascript 100 hours (CAS TRAINING Madrid)</li>
              <li className="text-sm"><span class="text-2xl">R</span>eact & Tailwind course 200h (UDEMY)</li>
              <li className="text-sm"><span class="text-2xl">U</span>X/UI Design course 80h (UDEMY)</li>

            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About

