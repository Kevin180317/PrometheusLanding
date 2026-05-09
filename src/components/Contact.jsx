import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = ({
  eyebrow,
  title,
  labelPhone,
  labelEmail,
  labelLocation,
  labelWebsite,
  whatsapp,
  placeholderName,
  placeholderEmail,
  placeholderCompany,
  placeholderSubject,
  placeholderMessage,
  buttonText,
  buttonTextSubmit,
  buttonSending,
  buttonError1,
  buttonError2,
  buttonSuccess,
  recaptchaError,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef(null);

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
    <section id="contact" className="px-12 py-20 bg-dark-2 border-t border-cyan/20 max-md:px-5 max-md:py-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="inline-block w-6 h-[1px] bg-cyan"></span>
        <span className="text-[10px] tracking-[5px] uppercase text-cyan">{eyebrow}</span>
      </div>
      <h2 className="font-bebas text-[clamp(40px,5vw,52px)] tracking-[3px] mb-3 leading-none">{title}</h2>

      <div className="grid grid-cols-[1fr_1fr] gap-14 max-md:grid-cols-1">
        <div>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 bg-cyan/8 border border-cyan/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 stroke-cyan fill-none stroke-[1.5]" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <div className="text-[9px] tracking-[2px] uppercase text-gray-custom mb-1">{labelPhone}</div>
              <div className="text-[15px] text-white">(664) 201-8967</div>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 bg-cyan/8 border border-cyan/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 stroke-cyan fill-none stroke-[1.5]" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <div className="text-[9px] tracking-[2px] uppercase text-gray-custom mb-1">{labelEmail}</div>
              <div className="text-[15px] text-white">contact@prometheustij.com</div>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 bg-cyan/8 border border-cyan/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 stroke-cyan fill-none stroke-[1.5]" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <div className="text-[9px] tracking-[2px] uppercase text-gray-custom mb-1">{labelLocation}</div>
              <div className="text-[15px] text-white">Tijuana, Baja California, México</div>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 bg-cyan/8 border border-cyan/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 stroke-cyan fill-none stroke-[1.5]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div>
              <div className="text-[9px] tracking-[2px] uppercase text-gray-custom mb-1">{labelWebsite}</div>
              <div className="text-[15px] text-white">prometheustij.com</div>
            </div>
          </div>

          <a href="https://wa.me/526642018967" target="_blank" rel="noopener" className="flex items-center justify-center gap-[10px] bg-[#25D366] text-white px-6 py-[14px] text-[12px] font-semibold tracking-[1.5px] uppercase no-underline w-full transition-opacity hover:opacity-90 mb-2">
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            {whatsapp}
          </a>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-[14px]">
              <input
                className="w-full bg-dark-3 border border-cyan/15 text-white px-4 py-3 text-[13px] font-barlow outline-none focus:border-cyan transition-colors resize-y placeholder:text-gray-custom2"
                type="text"
                placeholder={placeholderName}
                name="name"
              />
            </div>
            <div className="mb-[14px]">
              <input
                className="w-full bg-dark-3 border border-cyan/15 text-white px-4 py-3 text-[13px] font-barlow outline-none focus:border-cyan transition-colors resize-y placeholder:text-gray-custom2"
                type="email"
                placeholder={placeholderEmail}
                name="email"
              />
            </div>
            <div className="mb-[14px]">
              <input
                className="w-full bg-dark-3 border border-cyan/15 text-white px-4 py-3 text-[13px] font-barlow outline-none focus:border-cyan transition-colors resize-y placeholder:text-gray-custom2"
                type="text"
                placeholder={placeholderCompany}
                name="company"
              />
            </div>
            <div className="mb-[14px]">
              <input
                className="w-full bg-dark-3 border border-cyan/15 text-white px-4 py-3 text-[13px] font-barlow outline-none focus:border-cyan transition-colors resize-y placeholder:text-gray-custom2"
                type="text"
                placeholder={placeholderSubject}
                name="subject"
              />
            </div>
            <div className="mb-[14px]">
              <textarea
                className="w-full bg-dark-3 border border-cyan/15 text-white px-4 py-3 text-[13px] font-barlow outline-none focus:border-cyan transition-colors resize-y placeholder:text-gray-custom2"
                rows="4"
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

      <Toaster position="top-right" toastOptions={{ style: { background: '#0f1923', color: '#fff', border: '1px solid rgba(57,186,200,0.2)' } }} />
    </section>
  );
};

export default Contact;
