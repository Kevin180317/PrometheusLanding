import React from 'react';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        console.log
        alert(`Correo enviado a ${email}`)
    }
  return (
    <main
      id="contact"
      className="h-screen bg-[#39BAC8] flex justify-center items-center flex-col"
    >
      <h1 className="text-6xl mb-8 font-bold text-white">CONTACTO</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <input
            className="p-2.5 px-8 py-3 border border-black focus:outline-none text-black"
            type="email"
            name="email"
            id="email"
            placeholder="Ingresa tu correo electronico"
          />
          <button
            type="submit"
            className="px-8 py-2 bg-black hover:opacity-85 text-white uppercase"
          >
            ENVIAR
          </button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
