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
        <div className="p-8  bg-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {webProjects.map((project) => (
                    <div key={project.id} className="relative group overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105 h-80 hover:h-96">
                        <div className="relative h-full overflow-hidden">
                            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />

                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                            <h2 className="text-2xl font-bold text-black mb-2">{project.name}</h2>
                            <p className="text-black mb-4">{project.description}</p>
                            <p className="text-sm text-gray-700">{project.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}