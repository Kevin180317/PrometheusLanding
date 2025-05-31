import React, { useState } from "react";

export default function Product({
  AppDesc1,
  AppDesc2,
  WebDesc1,
  WebDesc2,
  WebDesc3,
  WebDesc4,
  WebDesc5,
  WebDesc6,
  ProtDesc1,
  ProtDesc2,
  PaliativosDesc,
  CloseButton,
  QuoteButton,
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 0,
      name: "Portafolio-Medico",
      description: PaliativosDesc,
      images: [
        "/Imagenes/Paliativos.png",
        "/Imagenes/Layer 2.png",
        "/Imagenes/Layer 4.png",
        "/Imagenes/Layer 5.png",
        "/Imagenes/Layer 6.png",
        "/Imagenes/Layer 7.png",
      ],
      category: "App",
      projectUrl: "/App",
    },
    {
      id: 1,
      name: "PetSafe",
      description: AppDesc1,
      images: [
        "/Imagenes/app1.png",
        "/Imagenes/app1.2.png",
        "/Imagenes/app1.3.png",
      ], // Varias imágenes
      category: "App",
      projectUrl: "/proyecto-1",
    },
    {
      id: 2,
      name: "CetoTj",
      description: WebDesc1,
      images: ["/Imagenes/mockup1.png", "/Imagenes/mockup2.png"],
      category: "Web",
      projectUrl: "https://cetotj.netlify.app/",
    },
    {
      id: 3,
      name: "Recipe-Book",
      description: AppDesc2,
      images: [
        "/Imagenes/app2.png",
        "/Imagenes/app2.2.png",
        "/Imagenes/app2.3.png",
      ],
      category: "App",
      projectUrl: "/proyecto-3",
    },
    {
      id: 4,
      name: "Medical-Commerce",
      description: WebDesc2,
      images: ["/Imagenes/mockup2.png", "/Imagenes/mockup4.png"],
      category: "Web",
      projectUrl: "https://medical-commerce.netlify.app/",
    },
    {
      id: 5,
      name: "Portfolio Photography-John",
      description: WebDesc3,
      images: ["/Imagenes/mockup3.png", "/Imagenes/mockup5.png"],
      category: "Web",
      projectUrl: "https://photography-john.netlify.app/",
    },
    {
      id: 6,
      name: "Prototipado",
      description: ProtDesc1,
      images: [
        "/Imagenes/Prototipado.jpg",
        "/Imagenes/protipo1.jpg",
        "/Imagenes/protipo2.jpg",
        "/Imagenes/protipo3.jpg",
      ],
      category: "Prototipo",
      projectUrl: "/proyecto-6",
    },
    {
      id: 7,
      name: ProtDesc2,
      description: ProtDesc2,
      images: [
        "/Imagenes/3D.jpg",
        "/Imagenes/3d_1.jpg",
        "/Imagenes/3d_2.jpg",
        "/Imagenes/3d_3.jpg",
      ],
      category: "Prototipo",
      projectUrl: "/proyecto-6",
    },
    // {
    //   id: 8,
    //   name: WebDesc5,
    //   description: WebDesc4,
    //   images: ["/Imagenes/demo-ecommerce.png"],
    //   category: "Web",
    //   projectUrl: "https://demo-ecommercebc.netlify.app/",
    // },
    {
      id: 9,
      name: "Akerlundh",
      description: WebDesc5,
      images: ["/Imagenes/akerlun.png"],
      category: "Web",
      projectUrl: "https://akerlundhinteriorismo.com/",
    },
    {
      id: 10,
      name: "profurniture",
      description: WebDesc6,
      images: ["/Imagenes/forniture.png"],
      category: "Web",
      projectUrl: "https://profurniture.netlify.app/",
    },
  ];

  const categories = ["All", "App", "Web", "Prototipo"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleImageClick = (project) => {
    if (project.category === "Web") {
      window.open(project.projectUrl, "_blank");
    } else {
      setSelectedProject(project);
      setCurrentImageIndex(0); // Reiniciar el índice de la imagen
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <label
            htmlFor="category"
            className="block text-xl font-semibold text-gray-900 mb-3"
          >
            Explorar proyectos de:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-lg"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out overflow-hidden"
            >
              <div
                className="relative h-72 overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(project)}
              >
                <img
                  src={project.images[0]}
                  alt={project.name}
                  title={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    {project.category === "Web" && (
                      <p className="text-gray-200">{project.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full overflow-hidden relative">
            {/* Contenedor del carrusel */}
            <div className="relative w-full h-64">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />

              {/* Botón Anterior */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M5 12l6 6" />
                  <path d="M5 12l6 -6" />
                </svg>
              </button>

              {/* Botón Siguiente */}
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M13 18l6 -6" />
                  <path d="M13 6l6 6" />
                </svg>
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                {selectedProject.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {selectedProject.description}
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                >
                  {CloseButton}
                </button>
                <a
                  href="/contact"
                  className="px-6 py-2 bg-[#39BAC8]  text-white rounded-lg hover:bg-[#2A9D8F] transition"
                >
                  {QuoteButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
