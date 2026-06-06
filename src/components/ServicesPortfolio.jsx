import { useState, useEffect } from "react";
import { projects as allProjects } from "../data/projects.js";

const CATEGORIES = {
  es: ["Todo", "Software & Web", "Apps", "Electrónica", "Impresión 3D"],
  en: ["All", "Software & Web", "Apps", "Electronics", "3D Printing"],
};

const FILTRO_MAP = {
  es: { software: "Software & Web", apps: "Apps", electronica: "Electrónica", fabricacion: "Impresión 3D" },
  en: { software: "Software & Web", apps: "Apps", electronica: "Electronics", fabricacion: "3D Printing" },
};

export default function ServicesPortfolio({ lang = "es", initialFilter = "" }) {
  const isEs = lang === "es";
  const categories = CATEGORIES[lang] || CATEGORIES.es;
  const allLabel = isEs ? "Todo" : "All";

  const [active, setActive] = useState(() => {
    if (initialFilter && FILTRO_MAP[lang]?.[initialFilter]) {
      return FILTRO_MAP[lang][initialFilter];
    }
    return allLabel;
  });
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    function applyFilterFromUrl() {
      const params = new URLSearchParams(window.location.search);
      const filtro = params.get("filtro");
      if (filtro && FILTRO_MAP[lang]?.[filtro]) {
        setActive(FILTRO_MAP[lang][filtro]);
        setAnimKey((k) => k + 1);
      }
    }

    applyFilterFromUrl();
    document.addEventListener("astro:page-load", applyFilterFromUrl);
    return () => document.removeEventListener("astro:page-load", applyFilterFromUrl);
  }, [lang]);

  const handleFilter = (cat) => {
    setActive(cat);
    setAnimKey((k) => k + 1);
  };

  const projects = allProjects.map((p) => ({
    ...p,
    name: p[lang]?.name ?? p.es.name,
    desc: p[lang]?.desc ?? p.es.desc,
    categoryLabel: lang === "en"
      ? p.category === "Electrónica" ? "Electronics"
      : p.category === "Fabricación" ? "3D Printing"
      : p.category
      : p.category === "Fabricación" ? "Impresión 3D"
      : p.category,
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
              onClick={() => handleFilter(cat)}
              className={`text-[10px] tracking-[2.5px] uppercase px-5 py-[10px] border transition-all duration-200 font-barlow cursor-pointer ${
                active === cat
                  ? "bg-cyan text-dark border-cyan font-semibold"
                  : "bg-transparent text-gray-custom border-cyan/20 hover:border-cyan hover:text-themed"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
          {filtered.map((project, i) => (
            <a
              key={`${animKey}-${project.slug}`}
              href={projectHref(project.slug)}
              className="group relative flex flex-col overflow-hidden border border-cyan/10 hover:border-cyan/40 transition-all duration-300 no-underline"
              style={{
                animation: `fadeSlideUp 0.4s ease both`,
                animationDelay: `${i * 60}ms`,
              }}
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
                <div className="absolute inset-0 bg-[rgba(13,17,23,0.65)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
                  <div className="font-bebas text-[18px] tracking-[1.5px] group-hover:text-cyan transition-colors duration-300 leading-tight text-themed">
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
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-14 h-14 border border-cyan/20 bg-cyan/5 flex items-center justify-center mb-2">
              <svg className="w-6 h-6 stroke-cyan fill-none stroke-[1.5]" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="font-bebas text-[28px] tracking-[4px] text-themed">
              {isEs ? "PRÓXIMAMENTE" : "COMING SOON"}
            </span>
            <p className="text-[13px] text-gray-custom text-center max-w-xs leading-relaxed">
              {isEs
                ? "Estamos preparando proyectos increíbles en esta categoría."
                : "We're preparing amazing projects in this category."}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
