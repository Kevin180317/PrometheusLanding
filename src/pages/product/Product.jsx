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
        <div className="p-4 h-screen bg-gray-100">
            <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Categoría</label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="border p-4 rounded-lg shadow-lg bg-white transform transition duration-500 hover:scale-105">
                        <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                        <p className="mb-2 text-gray-700">{project.description}</p>
                        <div className="overflow-hidden rounded-lg">
                            <img src={project.image} alt={project.name} className="mb-2 w-full h-48 object-cover transform transition duration-500 hover:scale-110" />
                        </div>
                        <p className="text-sm text-gray-500">{project.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
