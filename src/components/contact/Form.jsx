import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formData = { email, name, message };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !name || !message) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post("https://prometheustij.com/formulario", formData);
      toast.success("Mensaje enviado exitosamente");
      setEmail("");
      setName("");
      setMessage("");
    } catch (error) {
      toast.error("No se pudo enviar el mensaje");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-2xl bg-white shadow-2xl p-8 max-w-full w-full">
      <h1 className="text-4xl font-bold text-[#39BAC8] mb-6 text-center">
        Formulario de Contacto
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-col gap-6">
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39BAC8] focus:border-transparent transition-all"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39BAC8] focus:border-transparent transition-all"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39BAC8] focus:border-transparent transition-all"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="px-8 py-3 bg-[#39BAC8] hover:bg-[#2A9D8F] text-white text-xl font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Enviando...
              </div>
            ) : (
              "Enviar"
            )}
          </button>
        </div>
      </form>
      <Toaster position="top-right" />
    </div>
  );
}
