import { useState } from "react";

export default function Product({
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
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      name: ProtDesc2,
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

  const categories = ["All", "App", "Web", "Prototipo"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleImageClick = (project) => {
    const isEnglish = window.location.pathname.startsWith("/en/");

    // Construye la URL dependiendo del idioma
    const projectUrl = isEnglish
      ? `/en/projects/${project.link}`
      : `/projects/${project.link}`;

    window.location.href = projectUrl;
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
    </div>
  );
}
