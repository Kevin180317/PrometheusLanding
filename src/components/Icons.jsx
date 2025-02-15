import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Icons() {
  return (
    <div className="flex gap-4 px-4 py-4">
      <a
        title="ir a facebook"
        href="https://www.facebook.com/profile.php?id=61555674795492"
        target="_blank"
      >
        <FaFacebook className="text-2xl hover:text-blue-500 hover:cursor-pointer" />
      </a>
      <a 
      title="ir a instagram"
      href="https://www.instagram.com/prometheusarttij/" target="_blank">
        <FaInstagram className="text-2xl hover:text-blue-500 hover:cursor-pointer" />
      </a>
     <a 
      title="ir a x-twitter"
     href="https://x.com/PrometheusTij" target="_blank">
        <FaXTwitter className="text-2xl hover:text-blue-500 hover:cursor-pointer" />
      </a>
      {/* <FaLinkedin className="text-2xl hover:text-blue-500 hover:cursor-pointer" /> */}
    </div>
  );
}

export default Icons;
