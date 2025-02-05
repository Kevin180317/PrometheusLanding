import React, { useState } from 'react';

export default function Product() {
    const [selectedCategory, setSelectedCategory] = useState('All');

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

    const categories = ['All', 'App', 'Web', 'Prototipo'];

    const filteredProjects = selectedCategory === 'All' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    return (
<div className="p-8 min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto">
        {/* Selector de categoría mejorado */}
        <div className="mb-12">
            <label 
                htmlFor="category" 
                className="block text-xl font-semibold text-gray-900 mb-3"
            >
                Explorar proyectos de:
            </label>
            <div className="relative">
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 text-lg cursor-pointer appearance-none bg-white"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>

        {/* Grid de proyectos mejorado */}
        {filteredProjects.length === 0 ? (
            <div className="text-center py-24">
                <p className="text-xl text-gray-500">No se encontraron proyectos en esta categoría</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProjects.map((project) => (
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
                                    <h3 className="text-2xl font-bold leading-tight">{project.name}</h3>
                                    <p className="text-gray-200 line-clamp-3">{project.description}</p>
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
        )}
    </div>
</div>
    );
}