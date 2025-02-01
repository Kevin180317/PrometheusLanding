import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const formData = { email, name, message };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Por favor ingresa un correo válido");
      return;
    }

    try {
      await axios.post("https://prometheustij.com/formulario", formData);
      toast.success("Mensaje enviado exitosamente");
    } catch (error) {
      toast.error("No se pudo enviar el mensaje");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#39BAC8] p-8 m-8">
      <h1 className="text-3xl font-bold text-center">Formulario de contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2.5 px-8 py-3 border border-black focus:outline-none text-black"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2.5 px-8 py-3 border border-black focus:outline-none text-black"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2.5 px-8 py-3 border border-black focus:outline-none text-black"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="px-8 py-2 bg-black hover:opacity-85 text-2xl text-white uppercase"
          >
            Enviar
          </button>
        </div>
      </form>
      <Toaster position="top-right" />
    </div>
  );
}
