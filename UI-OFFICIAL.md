# Prometheus R&D — UI Oficial

> Landing page corporativa | Dark theme + Cyan accents | Tijuana · San Diego · Binacional

---

## Estructura del Layout

```
src/pages/index.astro         → Landing principal (ES)
src/pages/en/index.astro      → Landing principal (EN)
src/layouts/Layout.astro      → Layout global (Header, Footer, WhatsApp flotante)
```

---

## Secciones (en orden de renderizado)

| # | Componente | Archivo | Descripción |
|---|-----------|---------|-------------|
| 0 | LanguageModal | `src/components/LanguageModal.jsx` | Modal de selección de idioma al cargar (24h de cache) |
| 1 | **Banner** | `src/components/Banner.astro` | Barra promocional cyan |
| 2 | **Header** | `src/components/Header.astro` | Nav sticky + menú mobile |
| 3 | **Hero** | `src/components/Hero.astro` | Portada con grid, glows, stats |
| 4 | **Service** | `src/components/Service.astro` | Grid 2×2 servicios |
| 5 | **About** | `src/components/About.astro` | Strip 2 columnas: headline + badges |
| 6 | **Differentiators** | `src/components/Differentiators.astro` | Lista numerada 01-04 |
| 7 | **Portfolio** | `src/components/Portfolio.astro` | Grid 3×3 proyectos |
| 8 | **Testimonials** | `src/components/Testimonials.astro` | Grid 2×1 reseñas |
| 9 | **Contact** | `src/components/Contact.jsx` | Grid 2 columnas: info + formulario + reCAPTCHA |
| 10 | **Footer** | `src/components/Footer.astro` | Grid 4 columnas + social links |
| — | FloatingWhatsApp | `src/components/FloatingWhatsApp.astro` | Botón fijo WA esquinero |

---

## Sistema de diseño

### Colores

| Token | HEX | Uso |
|-------|-----|-----|
| `cyan` | `#39BAC8` | Acentos, botones, hover states |
| `cyan-light` | `#68C6E1` | Texto tagline, variante proto tag |
| `dark` | `#0D1117` | Fondo principal |
| `dark-2` | `#111820` | Fondo secciones alternas (services, portfolio, contact) |
| `dark-3` | `#161E27` | Fondo tarjetas (service cards, about, portfolio cards) |
| `gray-custom` | `#AFAFAF` | Texto secundario |
| `gray-custom2` | `#666` | Texto footer, placeholders |

### Tipografía

| Font | Uso | Clase Tailwind |
|------|-----|----------------|
| **Bebas Neue** | Headings, títulos grandes, números | `font-bebas` |
| **Barlow** | Body, párrafos, inputs (light 300, regular 400, semibold 600) | `font-barlow` (default) |

Cargadas via Google Fonts en `Layout.astro`.

### Espaciado general

| Contexto | Desktop | Mobile |
|----------|---------|--------|
| Secciones | `px-12 py-20` | `max-md:px-5 max-md:py-12` |
| Títulos | `text-[clamp(40px,5vw,52px)]` (Services, etc.) | responsive |
| Hero título | `text-[clamp(72px,10vw,110px)]` | `max-md:text-[64px]` / `max-sm:text-[52px]` |

---

## Componentes en detalle

### 1. Banner
- Fondo cyan, texto oscuro
- Texto: "Consulta gratuita sin compromiso · Free no-commitment consultation"
- CTA: "Agendar →" → ancla a `#contact`

### 2. Header
- Sticky con `backdrop-blur`, `bg-dark/97`, `z-[100]`
- Logo: `PROMET<span class="text-cyan">H</span>EUS` en Bebas Neue
- Nav links: Servicios, Portafolio, Nosotros, Blog, Contacto (CTA cyan)
- Badge `ES / EN` con borde cyan translúcido
- Mobile: hamburger menu → slide-in desde derecha con lista vertical
- Language selector visible en desktop y mobile

### 3. Hero
- Fondo: grid pattern cyan 4% a 48px, dos radial glows (esquinas)
- Eyebrow: línea cyan + "Tijuana · San Diego · Binacional"
- Título: "WE BRING THE FIRE OF TECH" con "FIRE" en cyan
- Tagline: itálico cyan-light
- Pills: 3 tags hovereables (Software, AI, Electronics)
- CTAs: "Ver servicios →" (cyan) y "Consulta gratis" (outline)
- Stats: 4 columnas (2020, 2, 10+, 100%) con números en Bebas Neue

### 4. Services
- Eyebrow + Title + Subtítulo
- Grid 2×2 con separador 1px cyan
- Cada card: icon box, nombre Bebas, descripción, tag precio
- Hover: barra vertical cyan 3px animada (group-hover)

### 5. About
- Dark-3 background, border-y cyan sutiles
- Columna 1: "STARTUP 100% TIJUANENSE" con 100% en cyan
- Columna 2: 5 badges con dot cyan y hover con borde más visible

### 6. Differentiators
- Lista numerada 01-04 en Bebas con opacidad 15%
- Cada item: número grande, título bold, body light
- Separadores entre items

### 7. Portfolio
- Grid 3 columnas (2 en tablet, 1 en mobile)
- Cards con hover: elevación -2px, borde cyan más visible
- Tags de tipo: `Web` (cyan bg), `App` (naranja), `Proto` (cyan-light)
- CTA al centro: "Ver portafolio completo →"

### 8. Testimonials
- Grid 2×1 cards con borde izquierdo cyan 3px
- Estrellas cyan, quote con comillas estilizadas
- Autor + rol en cyan

### 9. Contact
- Grid 2 columnas: info + formulario
- Info: 4 items (phone, email, location, web) con iconos SVG en caja cyan
- Botón WhatsApp verde (#25D366) full-width
- Formulario: 5 campos (name, email, company, subject, message)
- Inputs: dark bg, borde cyan/15, focus cyan
- reCAPTCHA dark theme
- Submit button cyan full-width

### 10. Footer
- Fondo #07090C, grid 4 columnas (2 en tablet, 1 en mobile)
- Col 1: Logo + tagline bilingüe + ubicación
- Col 2: Servicios (links)
- Col 3: Compañía (links)
- Col 4: Legal (links)
- Bottom bar: copyright + social dots (in, ig, fb)

### Floating WhatsApp
- Fixed bottom-right (#25D366)
- Sombra verde, hover scale
- Icono SVG de WhatsApp
- Responsive: 52px desktop, 46px mobile

---

## Responsive Design

| Breakpoint | Comportamiento |
|------------|---------------|
| `≤768px` | Nav colapsa a hamburger, grids pasan a 1 columna, espaciado reducido |
| `≤480px` | Hero título 52px, portfolio 1 col, footer 1 col, stats wrap |

---

## Animaciones

- Hover effects en cards (barra cyan, elevación, bordes)
- Transiciones suaves en links y botones (200-350ms)
- Modal de idioma con blur background al cargar

---

## Dependencias clave

| Paquete | Uso |
|---------|-----|
| `@astrojs/tailwind` | Estilos utilitarios |
| `@astrojs/react` | Componentes React (Contact, Language, LanguageModal) |
| `react-google-recaptcha` | Captcha en formulario |
| `react-hot-toast` | Notificaciones formulario |
| `axios` | Envío de formulario |

---

## Próximos pasos sugeridos

1. Reemplazar testimonios placeholder con reseñas reales de Google
2. Conectar formulario a backend (Formspree / Netlify Forms / API propia)
3. Actualizar enlaces de redes sociales en footer
4. Agregar portafolio real con links a proyectos
5. Configurar páginas de Términos y Privacidad
