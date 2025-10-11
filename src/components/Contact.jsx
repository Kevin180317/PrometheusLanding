import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = ({
  title,
  buttonText,
  placeholder1,
  placeholder2,
  placeholder3,
  buttonSending,
  buttonError1,
  buttonError2,
  buttonSuccess,
  recaptchaError = "Por favor verifica que no eres un robot",
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      toast.error(buttonError1);
      return;
    }

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      toast.error(recaptchaError);
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(import.meta.env.PUBLIC_FORMULARIO_URL, {
        name,
        email,
        message,
        recaptchaToken: recaptchaValue,
      });
      toast.success(buttonSuccess);
      e.target.reset();
      recaptchaRef.current.reset();
    } catch (error) {
      toast.error(buttonError2);
      recaptchaRef.current.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      id="contact"
      className="min-h-screen flex justify-center items-center flex-col bg-cover bg-center px-8"
      style={{
        backgroundImage: "url(/Fondos/1.webp)",
      }}
    >
      <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-8">
        {title}
      </h1>

      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-col gap-6">
          <input
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39BAC8] focus:border-transparent transition-all"
            type="text"
            name="name"
            placeholder={placeholder1}
            required
          />
          <input
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39BAC8] focus:border-transparent transition-all"
            type="email"
            name="email"
            placeholder={placeholder2}
            required
          />
          <textarea
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39BAC8] focus:border-transparent transition-all"
            name="message"
            placeholder={placeholder3}
            rows="5"
            required
          ></textarea>

          {/* Renderiza ReCAPTCHA solo en cliente */}
          {typeof window !== "undefined" && (
            <div className="flex justify-center">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY}
                theme="light"
              />
            </div>
          )}

          <button
            type="submit"
            className="px-8 py-3 bg-black text-white text-xl font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                {buttonSending}
              </div>
            ) : (
              buttonText
            )}
          </button>
        </div>
      </form>

      <Toaster position="top-right" />
    </main>
  );
};

export default Contact;
