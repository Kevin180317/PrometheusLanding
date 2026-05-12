import { useState } from "react";
import { projects as allProjects } from "../data/projects.js";

const CATEGORIES = {
  es: ["Todo", "Software & Web", "Apps", "Electrónica", "Branding & UX/UI"],
  en: ["All", "Software & Web", "Apps", "Electronics", "Branding & UX/UI"],
};

export default function ServicesPortfolio({ lang = "es" }) {
  const isEs = lang === "es";
  const categories = CATEGORIES[lang] || CATEGORIES.es;
  const allLabel = isEs ? "Todo" : "All";

  const [active, setActive] = useState(allLabel);

  const projects = allProjects.map((p) => ({
    ...p,
    name: p[lang]?.name ?? p.es.name,
    desc: p[lang]?.desc ?? p.es.desc,
    categoryLabel: lang === "en" && p.category === "Electrónica" ? "Electronics" : p.category,
  }));

  const filtered =
    active === allLabel
      ? projects
      : projects.filter((p) => p.categoryLabel === active);

  const projectHref = (slug) =>
    isEs ? `/projects/${slug}/` : `/en/projects/${slug}/`;

  return (
    <section className="px-12 pb-24 bg-dark max-md:px-5 max-md:pb-16">
      <div className="max-w-6xl mx-auto">

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[10px] tracking-[2.5px] uppercase px-5 py-[10px] border transition-all duration-200 font-barlow cursor-pointer ${
                active === cat
                  ? "bg-cyan text-dark border-cyan font-semibold"
                  : "bg-transparent text-gray-custom border-cyan/20 hover:border-cyan hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
          {filtered.map((project) => (
            <a
              key={project.slug}
              href={projectHref(project.slug)}
              className="group relative flex flex-col overflow-hidden border border-cyan/10 hover:border-cyan/40 transition-all duration-300 no-underline"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-dark-3 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[10px] tracking-[3px] uppercase text-cyan border border-cyan/60 px-4 py-2">
                    {isEs ? "Ver proyecto →" : "View project →"}
                  </span>
                </div>
                {/* Cyan bottom line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan transition-all duration-500 group-hover:w-full"></div>
              </div>

              {/* Card body */}
              <div className="bg-dark-3 p-5 flex flex-col gap-2 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="font-bebas text-[18px] tracking-[1.5px] group-hover:text-cyan transition-colors duration-300 leading-tight text-white">
                    {project.name}
                  </div>
                  <span className="text-[9px] tracking-[1.5px] uppercase text-cyan border border-cyan/30 px-2 py-[3px] flex-shrink-0 mt-[2px]">
                    {project.tag}
                  </span>
                </div>
                <p className="text-[12px] font-light text-gray-custom leading-[1.7]">
                  {project.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-custom text-[13px]">
            {isEs ? "No hay proyectos en esta categoría aún." : "No projects in this category yet."}
          </div>
        )}

      </div>
    </section>
  );
}
