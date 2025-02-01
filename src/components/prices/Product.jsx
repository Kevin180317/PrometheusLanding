import React from 'react';

export default function Product({ categoria}) {
    const projects = [
        {
            id: 1,
            name: 'Proyecto 1',
            description: 'Descripción del proyecto 1',
            image: '/Imagenes/1.webp',
            category: 'App'
        },
        {
            id: 2,
            name: 'Proyecto 2',
            description: 'Descripción del proyecto 2',
            image: '/Imagenes/2.jpg',
            category: 'Web'
        },
        {
            id: 3,
            name: 'Proyecto 3',
            description: 'Descripción del proyecto 3',
            image: '/Imagenes/3.webp',
            category: 'App'
        },
        {
            id: 4,
            name: 'Proyecto 4',
            description: 'Descripción del proyecto 4',
            image: '/Imagenes/4.jpg',
            category: 'Prototipo'
        },
        {
            id: 5,
            name: 'Proyecto 5',
            description: 'Descripción del proyecto 5',
            image: '/Imagenes/5.webp',
            category: 'Prototipo'
        }
    ];

    // Filtrar solo los proyectos de la categoría "Web"
    const webProjects = projects.filter(project => project.category ===  categoria);

    return (
<div className="p-8 bg-gray-50">
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
    </div>
</div>
    );
}