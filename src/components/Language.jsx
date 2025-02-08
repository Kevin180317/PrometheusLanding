import { useState, useEffect } from "react";

function Language() {
  const [selectedLanguage, setSelectedLanguage] = useState("MX");

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith("/en")) {
      setSelectedLanguage("US");
    } else {
      setSelectedLanguage("MX");
    }
  }, []);

  function handleChange(event) {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);

    if (newLanguage === "MX") {
      window.location.href = "/";
    } else if (newLanguage === "US") {
      window.location.href = "/en/";
    }
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-transparent">
      <img
        src={selectedLanguage === "MX" ? "/mx.svg" : "/us.svg"}
        alt="Flag"
        className="w-8 h-8 cursor-pointer"
      />
      <select
        value={selectedLanguage}
        onChange={handleChange}
        className="p-2 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option className="text-white bg-black" value="MX">
          MX
        </option>
        <option className="text-white bg-black" value="US">
          US
        </option>
      </select>
    </div>
  );
}

export default Language;
