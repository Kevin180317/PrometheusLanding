import { useState } from 'react';

function Language() {
  const [selectedLanguage, setSelectedLanguage] = useState('MX');

  function handleChange(event) {
    setSelectedLanguage(event.target.value);
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-transparent">
      <img 
        src={selectedLanguage === 'MX' ? "/mx.svg" : "/us.svg"} 
        alt="Flag" 
        className="w-8 h-8 cursor-pointer" 
      />
      <select 
        value={selectedLanguage} 
        onChange={handleChange} 
        className="p-2 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option className='text-white bg-black' value="MX">MX</option>
        <option  className='text-white bg-black' value="US">US</option>
      </select>
    </div>
  );
}

export default Language;