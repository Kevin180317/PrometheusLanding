import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function Form() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#39BAC8] p-8 m-8">
      <h1 className="text-3xl font-bold text-center">Formulario de contacto</h1>
      <form action="">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            className="p-2.5 px-8 py-3 border border-black focus:outline-none text-black"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo"
            className="p-2.5 px-8 py-3 border border-black focus:outline-none text-black"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Mensaje"
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
    </div>
  );
}
