import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
        <form method="POST" action="https://getform.io/f/d30b644c-a838-4145-973b-49518f02de8b" className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8">
                <p className="text-gray-300 text-4xl font-bold inline border-b-4 border-amber-400">Contact</p>
                <p className="text-gray-300 py-4"> Manda el formulario o escribeme a siriosukur@gmail.com </p>
            </div>
            <input className="p-2 bg-[#ccd6f6]" type="text" placeholder="Name" name="name"/>
            <input className=" my-4 p-2 bg-[#ccd6f6]"  type="text" placeholder="Email" name="email"/>
            <textarea className="p-2 bg-[#ccd6f6]" name="message" placeholder="Message"rows="10"></textarea>
            <button className="text-white border 2 rounded-md hover:bg-amber-400 hover:text-black hover:font-bold hover:border-amber-400 px-4 py-4 my-8 mx-auto flex items-center" type="submit">
                Contactame
            </button>
        </form>
    </div>
  )
}

export default Contact