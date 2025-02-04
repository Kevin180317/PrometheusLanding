import React from "react";

export default function Product({ categoria }) {
  const projects = [
    {
      id: 1,
      name: "Proyecto 1",
      description: "Descripción del proyecto 1",
      image: "/Imagenes/app1.png",
      category: "App",
    },
    {
      id: 2,
      name: "Proyecto 2",
      description: "Descripción del proyecto 2",
      image: "/Imagenes/mockup1.png",
      category: "Web",
    },
    {
      id: 3,
      name: "Proyecto 3",
      description: "Descripción del proyecto 3",
      image: "/Imagenes/app2.png",
      category: "App",
    },
    {
      id: 4,
      name: "Proyecto 4",
      description: "Descripción del proyecto 4",
      image: "/Imagenes/mockup2.png",
      category: "Web",
    },
    {
      id: 5,
      name: "Proyecto 5",
      description: "Descripción del proyecto 5",
      image: "/Imagenes/mockup3.png",
      category: "Web",
    },
    {
      id: 6, 
      name: "Proyecto 6",
      description: "Descripción del proyecto 5",
      image: "/Imagenes/mockup3.png",
      category: "Prototipo",
    }
  ];

  // Filtrar solo los proyectos de la categoría "Web"
  const webProjects = projects.filter(
    (project) => project.category === categoria
  );

  return (
    <main>
      <section className="p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Grid de proyectos mejorado con efecto de panel deslizable */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {webProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out overflow-hidden"
              >
                {/* Imagen con efecto hover mejorado */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlay de información */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="space-y-3 text-white">
                      <div className="inline-flex items-center px-3 py-1.5 bg-indigo-500/90 rounded-full text-sm font-medium">
                        {project.category}
                      </div>
                      <h3 className="text-2xl font-bold leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-gray-200 line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Badge flotante */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
                  {project.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="py-24 flex flex-col justify-center items-center">
        <h1 className="uppercase text-5xl">
          Nuestro trabajo habla por nosotros!
        </h1>
        <p className="text-lg mt-4 text-center max-w-2xl mb-8">
          Si estás interesado en incursionar en el comercio digital, no dudes en
          contactarnos!
        </p>
        <a
          href="/contact"
          className="bg-[#39BAC8] rounded-full px-8 py-2 text-white uppercase mt-8 hover:scale-105 transition-transform duration-300 ease-out shadow-2xl"
        >
          Contáctanos
        </a>
      </div>
    </main>
  );
}
