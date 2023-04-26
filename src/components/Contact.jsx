import React from 'react'

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevención del envío del formulario por defecto

    // Obtener los valores de los campos
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Validar que los campos no estén vacíos
    if (!name || !email || !message) {
      alert("Por favor completa todos los campos."); // Mostrar un mensaje de alerta en caso de campos vacíos
      return;
    }

    // Enviar el formulario si todos los campos están completos
    event.target.submit();
  }

  return (
    <div id="contact" className="w-full h-screen pt-24 bg-[#0a192f] flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/ba3e22f9-cc04-43cf-9c8d-cc90e38b72cc" className="flex flex-col max-w-[600px] w-full" onSubmit={handleSubmit}>
        <div className="pb-8">
          <p className="text-gray-300 text-4xl font-bold inline border-b-4 border-amber-400">Contact</p>
          <p className="text-gray-300 py-4"> Interested in working together or have any questions? Feel free to contact</p>

        </div>
        <input className="p-2 bg-[#ccd6f6]" type="text" placeholder="Name" name="name" />
        <input className=" my-4 p-2 bg-[#ccd6f6]" type="text" placeholder="Email" name="email" />
        <textarea className="p-2 bg-[#ccd6f6]" name="message" placeholder="Message" rows="10"></textarea>
        <button className="text-white border 2 rounded-md hover:bg-amber-400 hover:text-black hover:font-bold hover:border-amber-400 px-4 py-4 my-8 mx-auto flex items-center" type="submit">
          Contactame
        </button>
      </form>
    </div>
  )
}

export default Contact

