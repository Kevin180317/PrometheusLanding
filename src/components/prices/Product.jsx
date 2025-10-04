import React from "react";

export default function Product({
  categoria,
  AppDesc1,
  AppDesc2,
  WebDesc1,
  WebDesc2,
  WebDesc3,
  WebDesc5,
  WebDesc6,
  ProtDesc1,
  ProtDesc2,
  PaliativosDesc,
}) {
  const projects = [
    {
      id: 0,
      name: "Portafolio-Medico",
      link: "portafolio-medico",
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
      id: 9,
      name: "Akerlundh",
      link: "akerlundh",
      description: WebDesc5,
      images: ["/Imagenes/aker.png"],
      category: "Web",
      projectUrl: "https://akerlundhinteriorismo.com/",
    },
    {
      id: 1,
      name: "PetSafe",
      link: "petsafe",
      description: AppDesc1,
      images: [
        "/Imagenes/app1.png",
        "/Imagenes/app1.2.png",
        "/Imagenes/app1.3.png",
      ],
      category: "App",
      projectUrl: "/proyecto-1",
    },
    {
      id: 2,
      name: "CetoTj",
      link: "cetotj",
      description: WebDesc1,
      images: ["/Imagenes/mockup1.png", "/Imagenes/mockup2.png"],
      category: "Web",
      projectUrl: "https://cetotj.netlify.app/",
    },
    {
      id: 3,
      name: "Recipe-Book",
      link: "recipe-book",
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
      link: "medical-commerce",
      description: WebDesc2,
      images: ["/Imagenes/mockup2.png", "/Imagenes/mockup4.png"],
      category: "Web",
      projectUrl: "https://medical-commerce.netlify.app/",
    },
    {
      id: 5,
      name: "Portfolio Photography-John",
      link: "portfolio-photography-john",
      description: WebDesc3,
      images: ["/Imagenes/mockup3.png", "/Imagenes/mockup5.png"],
      category: "Web",
      projectUrl: "https://photography-john.netlify.app/",
    },
    {
      id: 6,
      name: "Prototipado",
      link: "prototipado",
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
      link: "impresiones-3d",
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
    {
      id: 10,
      name: "profurniture",
      link: "profurniture",
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
    // Detecta si la ruta actual incluye /en/
    const isEnglish = window.location.pathname.startsWith("/en/");

    // Construye la URL según el idioma
    const projectUrl = isEnglish
      ? `/en/projects/${project.link}`
      : `/projects/${project.link}`;

    // Redirige
    window.location.href = projectUrl;
  };

  return (
    <main>
      <section className="p-8 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(project)}
              >
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-105"
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
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
