import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Info() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 px-4 py-4">
        <div className="flex gap-3 justify-center">
          <BsFillTelephoneFill className="text-3xl hover:cursor-pointer" />
          <p className="text-lg">(664)-201-8967</p>
        </div>
        <div className="flex gap-3 justify-center">
          <MdEmail className="text-3xl hover:cursor-pointer" />
          <p className="text-lg">contact@prometheustij.com</p>
        </div>
        <div className="flex gap-3 justify-center">
          <FaLocationDot className="text-3xl hover:cursor-pointer" />
          <p className="text-lg">Tijuana, Baja California</p>
        </div>
      </div>
      <div className="flex gap-4 px-4 py-4 mt-4">
        <FaFacebook className="text-2xl hover:text-blue-500 hover:cursor-pointer" />
        <FaInstagram className="text-2xl hover:text-blue-500 hover:cursor-pointer" />
        <FaXTwitter className="text-2xl hover:text-blue-500 hover:cursor-pointer" />
        <FaLinkedin className="text-2xl hover:text-blue-500 hover:cursor-pointer" />
      </div>
    </div>
  );
}

export default Info;
