import React from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Contact = ({ title, placeholder, buttonText }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) {
      toast.error("Please enter a valid email");
      return;
    }

    try {
      await axios.post("https://prometheustij.com/formulario", { email });
      toast.success("Email submitted successfully");
    } catch (error) {
      toast.error("Failed to submit email");
    }
  };

  return (
    <main
      id="contact"
      className="h-screen bg-[#39BAC8] flex justify-center items-center flex-col "
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
          >
            {buttonText}
          </button>
        </div>
        <Toaster position="top-right" />
      </form>
    </main>
  );
};

export default Contact;
