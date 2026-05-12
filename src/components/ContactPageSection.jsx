import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const ContactPageSection = ({
  lang = "es",
  labelPhone,
  labelEmail,
  labelLocation,
  placeholderName,
  placeholderEmail,
  placeholderCompany,
  placeholderSubject,
  placeholderMessage,
  buttonTextSubmit,
  buttonSending,
  buttonError1,
  buttonError2,
  buttonSuccess,
  recaptchaError,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef(null);

  const isEs = lang === "es";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

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
    <section className="px-12 py-20 bg-dark max-md:px-5 max-md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-[1fr_1fr] gap-12 items-start max-md:grid-cols-1">

          {/* LEFT COLUMN */}
          <div className="bg-dark-2 border border-cyan/10 p-10 max-md:p-6">
            <h2 className="font-bebas text-[clamp(32px,4vw,44px)] tracking-[2px] leading-tight mb-4">
              {isEs ? (
                <>¡QUEREMOS <span className="text-cyan">TRABAJAR</span> CONTIGO!</>
              ) : (
                <>WE WANT TO <span className="text-cyan">WORK</span> WITH YOU!</>
              )}
            </h2>
            <p className="text-gray-custom text-[14px] leading-relaxed font-light mb-10">
              {isEs
                ? "Estamos listos para convertir tus ideas en realidad. ¡Contáctanos y comencemos a colaborar!"
                : "We're ready to turn your ideas into reality. Contact us and let's start collaborating!"}
            </p>

            {/* Contact info */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan/8 border border-cyan/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 stroke-cyan fill-none stroke-[1.5]" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] tracking-[2px] uppercase text-gray-custom mb-1">{labelPhone}</div>
                  <a href="tel:+526642018967" className="text-[15px] text-white no-underline hover:text-cyan transition-colors">(664)-201-8967</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan/8 border border-cyan/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 stroke-cyan fill-none stroke-[1.5]" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] tracking-[2px] uppercase text-gray-custom mb-1">{labelEmail}</div>
                  <a href="mailto:contact@prometheustij.com" className="text-[15px] text-white no-underline hover:text-cyan transition-colors">contact@prometheustij.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan/8 border border-cyan/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 stroke-cyan fill-none stroke-[1.5]" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] tracking-[2px] uppercase text-gray-custom mb-1">{labelLocation}</div>
                  <div className="text-[15px] text-white">Tijuana, Baja California</div>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="border-t border-cyan/10 pt-8">
              <div className="text-[9px] tracking-[3px] uppercase text-cyan mb-4">
                {isEs ? "Síguenos" : "Follow us"}
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/prometheusarttij/"
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram"
                  className="w-10 h-10 border border-cyan/20 flex items-center justify-center text-gray-custom hover:border-cyan hover:text-cyan transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61555674795492"
                  target="_blank"
                  rel="noopener"
                  aria-label="Facebook"
                  className="w-10 h-10 border border-cyan/20 flex items-center justify-center text-gray-custom hover:border-cyan hover:text-cyan transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/PrometheusTij"
                  target="_blank"
                  rel="noopener"
                  aria-label="X (Twitter)"
                  className="w-10 h-10 border border-cyan/20 flex items-center justify-center text-gray-custom hover:border-cyan hover:text-cyan transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — form */}
          <div className="bg-dark-2 border border-cyan/10 p-10 max-md:p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-[14px]">
                <input
                  className="w-full bg-dark-3 border border-cyan/15 text-white px-4 py-3 text-[13px] font-barlow outline-none focus:border-cyan transition-colors placeholder:text-gray-custom2"
                  type="text"
                  placeholder={placeholderName}
                  name="name"
                />
              </div>
              <div className="mb-[14px]">
                <input
                  className="w-full bg-dark-3 border border-cyan/15 text-white px-4 py-3 text-[13px] font-barlow outline-none focus:border-cyan transition-colors placeholder:text-gray-custom2"
                  type="email"
                  placeholder={placeholderEmail}
                  name="email"
                />
              </div>
              <div className="mb-[14px]">
                <input
                  className="w-full bg-dark-3 border border-cyan/15 text-white px-4 py-3 text-[13px] font-barlow outline-none focus:border-cyan transition-colors placeholder:text-gray-custom2"
                  type="text"
                  placeholder={placeholderCompany}
                  name="company"
                />
              </div>
              <div className="mb-[14px]">
                <input
                  className="w-full bg-dark-3 border border-cyan/15 text-white px-4 py-3 text-[13px] font-barlow outline-none focus:border-cyan transition-colors placeholder:text-gray-custom2"
                  type="text"
                  placeholder={placeholderSubject}
                  name="subject"
                />
              </div>
              <div className="mb-[14px]">
                <textarea
                  className="w-full bg-dark-3 border border-cyan/15 text-white px-4 py-3 text-[13px] font-barlow outline-none focus:border-cyan transition-colors resize-y placeholder:text-gray-custom2"
                  rows="5"
                  placeholder={placeholderMessage}
                  name="message"
                ></textarea>
              </div>

              {typeof window !== "undefined" && (
                <div className="flex justify-center mb-[14px]">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY}
                    theme="dark"
                  />
                </div>
              )}

              <button
                className="w-full bg-cyan text-dark px-8 py-[14px] text-[12px] font-semibold tracking-[2px] uppercase border-none cursor-pointer hover:opacity-85 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-center block"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-dark border-t-transparent rounded-full animate-spin"></span>
                    {buttonSending}
                  </span>
                ) : (
                  buttonTextSubmit
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

      <Toaster
        position="top-right"
        toastOptions={{ style: { background: "#0f1923", color: "#fff", border: "1px solid rgba(57,186,200,0.2)" } }}
      />
    </section>
  );
};

export default ContactPageSection;
