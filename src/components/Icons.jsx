import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Icons() {
  return (
    <div className="flex gap-4 px-4 py-4">
      <FaFacebook className="text-2xl hover:text-blue-500 hover:cursor-pointer" />
      <FaInstagram className="text-2xl hover:text-blue-500 hover:cursor-pointer" />
      <FaXTwitter className="text-2xl hover:text-blue-500 hover:cursor-pointer" />
      <FaLinkedin className="text-2xl hover:text-blue-500 hover:cursor-pointer" />
    </div>
  );
}

export default Icons;
