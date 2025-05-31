import React, { useState } from "react";

export default function Product({
  categoria,
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
  CloseButton,
  QuoteButton,
  PaliativosDesc,
}) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
      name: "Impresiones 3D",
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
    //   name: "Demo E-commerce",
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

  const filteredProjects = projects.filter(
    (project) => project.category === categoria
  );

  const handleImageClick = (project) => {
    if (project.category === "Web") {
      window.open(project.projectUrl, "_blank");
    } else {
      setSelectedProject(project);
      setSelectedImageIndex(0);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleNextImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex + 1) % selectedProject.images.length
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
  };

  return (
    <main>
      <section className="p-8 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
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
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="space-y-3 text-white">
                      <div className="inline-flex items-center px-3 py-1.5 bg-indigo-500/90 rounded-full text-sm font-medium">
                        {project.category}
                      </div>
                      <h3 className="text-2xl font-bold leading-tight">
                        {project.name}
                      </h3>
                      {project.category === "Web" && (
                        <p className="text-gray-200 line-clamp-3">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full overflow-hidden">
            <div className="relative">
              <img
                src={selectedProject.images[selectedImageIndex]}
                alt={selectedProject.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
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
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
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
                  className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  {CloseButton}
                </button>
                <a
                  href="/contact"
                  className="px-6 py-2 bg-[#39BAC8] text-white rounded-lg hover:bg-[#2A9D8F] transition-colors"
                >
                  {QuoteButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
