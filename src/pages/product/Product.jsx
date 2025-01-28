import React, { useState } from 'react';

export default function Product() {
    const [selectedCategory, setSelectedCategory] = useState('All');

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

    const categories = ['All', 'App', 'Web', 'Prototipo'];

    const filteredProjects = selectedCategory === 'All' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className="p-8 min-h-screen bg-gray-100">
            <div className="mb-8">
                <label htmlFor="category" className="block text-lg font-medium text-gray-700">Categoría</label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mt-2 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="relative group overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105 h-80 hover:h-96">
                        <div className="relative h-full overflow-hidden">
                            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="p-4 text-center">
                                    <h2 className="text-2xl font-bold text-white mb-2">{project.name}</h2>
                                    <p className="text-white mb-4">{project.description}</p>
                                    <p className="text-sm text-gray-300">{project.category}</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
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