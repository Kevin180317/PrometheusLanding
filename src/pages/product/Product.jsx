import React, { useState } from 'react';

const items = [
  {
    id: 1,
    type: "App", // Tipo: App, Web o Prototipo
    text: "1",
    image: "/Imagenes/1.webp",
  },
  {
    id: 2,
    type: "Web",
    text: "2",
    image: "/Imagenes/2.jpg",
  },
  {
    id: 3,
    type: "Prototipo",
    text: "3",
    image: "/Imagenes/3.webp",
  },
  {
    id: 4,
    type: "App",
    text: "4",
    image: "/Imagenes/4.jpg",
  },
];

const CategorizedProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('App');

  // Filtrar los proyectos según la categoría seleccionada
  const filteredItems = items.filter(item => item.type === selectedCategory);

  return (
    <div className="mx-auto container p-8">
      <h1 className="text-center text-6xl mt-12 mb-8">Productos</h1>

      {/* Select para elegir la categoría */}
      <div className="mb-8 text-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="App">Apps</option>
          <option value="Web">Web</option>
          <option value="Prototipo">Prototipos</option>
        </select>
      </div>

      {/* Mostrar los proyectos de la categoría seleccionada */}
      <div className="grid md:grid-cols-3 md:grid-rows-4 gap-8 px-8 py-8">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="col-span-1 row-span-1 rounded-3xl h-96 border border-black text-black bg-cover bg-center group relative"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="relative overflow-hidden rounded-3xl w-full h-full">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110" />
            </div>
            <p className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 text-center text-white p-2 rounded">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorizedProjects;
