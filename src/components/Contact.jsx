import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Contact = ({ title, placeholder, buttonText }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);  // Estado para manejar la habilitación del botón

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) {
      toast.error("Please enter a valid email");
      return;
    }

    setIsSubmitting(true); // Deshabilita el botón al enviar el formulario

    try {
      await axios.post("https://prometheustij.com/formulario", { email });
      toast.success("Email sent successfully!"); // Si la solicitud es exitosa
    } catch (error) {
      toast.error("An error occurred, please try again."); // Si ocurre un error
    } finally {
      setIsSubmitting(false); // Vuelve a habilitar el botón al finalizar la solicitud
    }
  };

  return (
    <main
      id="contact"
      className="h-screen bg-[#39BAC8] flex justify-center items-center flex-col"
      style={{
        backgroundImage: "url(/Fondos/1.webp)",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-6xl mb-8 font-bold text-white">{title}</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <input
            className="p-2.5 px-8 py-3 border border-black focus:outline-none text-black"
            type="email"
            name="email"
            id="email"
            placeholder={placeholder}
          />
          <button
            type="submit"
            className="px-8 py-2 bg-black hover:opacity-85 text-2xl text-white uppercase"
            disabled={isSubmitting} // Deshabilita el botón mientras se está enviando
          >
            {isSubmitting ? "Sending..." : buttonText}
          </button>
        </div>
      </form>
      <Toaster position="top-right" />
    </main>
  );
};

export default Contact;
