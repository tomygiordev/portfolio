"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    name: "Nictech",
    kind: "Servicio técnico · Plataforma comercial",
    url: "https://nictech.com.ar",
    displayUrl: "nictech.com.ar",
    summary:
      "Una experiencia digital clara y directa para convertir búsquedas locales en consultas reales, reparaciones y ventas.",
    details: ["Estrategia", "UX/UI", "Desarrollo", "SEO local"],
    className: "nictech",
    preview: (
      <div className="device-preview" aria-hidden="true">
        <div className="phone phone-back" />
        <div className="phone phone-front">
          <span className="phone-dot" />
          <strong>NIC</strong>
          <small>TECH</small>
        </div>
        <div className="repair-pill">Servicio técnico especializado</div>
      </div>
    ),
  },
  {
    number: "02",
    name: "WP Construcciones",
    kind: "Arquitectura · Web corporativa",
    url: "https://wpconstrucciones.com",
    displayUrl: "wpconstrucciones.com",
    summary:
      "Precisión técnica convertida en una presencia editorial que transmite trayectoria, método y confianza en Steel Frame.",
    details: ["Dirección visual", "Arquitectura web", "Desarrollo", "Contenido"],
    className: "wp",
    preview: (
      <div className="building-preview" aria-hidden="true">
        <div className="building-mark">WP</div>
        <div className="structure-lines">
          <i />
          <i />
          <i />
          <i />
        </div>
        <p>Construcciones<br />especiales.</p>
      </div>
    ),
  },
  {
    number: "03",
    name: "Integrative",
    kind: "Agencia digital · Producto y marca",
    url: "https://integrative.help",
    displayUrl: "integrative.help",
    summary:
      "Una agencia posicionada desde la ejecución: soluciones a medida, productos para industrias y resultados sin ruido.",
    details: ["Brand system", "Producto", "Web", "Motion"],
    className: "integrative",
    preview: (
      <div className="dashboard-preview" aria-hidden="true">
        <div className="dash-sidebar"><b>in</b><i /><i /><i /></div>
        <div className="dash-content">
          <div className="dash-top"><span>Overview</span><em>Q2 · 2026</em></div>
          <div className="dash-metrics">
            <span><small>Proyectos</small><b>24</b></span>
            <span><small>Uptime</small><b>99.9%</b></span>
          </div>
          <div className="dash-chart"><i /><i /><i /><i /><i /><i /></div>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    name: "Contabilidad en práctica",
    kind: "Educación · Landing de conversión",
    url: "https://curso-contabilidad-practica.pages.dev",
    displayUrl: "curso-contabilidad-practica.pages.dev",
    summary:
      "Un curso complejo presentado con una narrativa simple: aprender haciendo, del comprobante al balance real de una PyME.",
    details: ["Concepto", "Storytelling", "UX/UI", "Desarrollo"],
    className: "accounting",
    preview: (
      <div className="ledger-preview" aria-hidden="true">
        <div className="ledger-tab">CURSO 01</div>
        <p>Del comprobante<br />al balance.</p>
        <div className="ledger-lines">
          <span>Activo</span><b>$ 4.280.000</b>
          <span>Pasivo</span><b>$ 1.620.000</b>
          <span>Resultado</span><b>$ 2.660.000</b>
        </div>
      </div>
    ),
  },
  {
    number: "05",
    name: "NextCampus",
    kind: "EdTech · Plataforma académica",
    url: "https://nextcampus.space",
    displayUrl: "nextcampus.space",
    summary:
      "El recorrido universitario convertido en producto: materias, apuntes, calendario y correlativas en un mismo lugar.",
    details: ["Product design", "Sistema UI", "Full-stack", "Data"],
    className: "campus",
    preview: (
      <div className="campus-preview" aria-hidden="true">
        <div className="campus-head"><b>NC</b><span>Lic. en Sistemas</span></div>
        <div className="campus-grid">
          <span><small>01</small>Algoritmos</span>
          <span><small>02</small>Álgebra</span>
          <span><small>03</small>Sistemas</span>
          <span className="campus-active"><small>04</small>Programación</span>
        </div>
        <div className="campus-route">1º año <i /> 2º año <i /> 3º año</div>
      </div>
    ),
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Ir al inicio">
          G<span>·</span>
        </a>
        <div className="header-status">
          <i /> Disponible para proyectos selectos
        </div>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Navegación principal">
          <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
          <a href="#perfil" onClick={closeMenu}>Perfil</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-kicker">
          <span>Diseño & desarrollo digital</span>
          <span>Entre Ríos · Argentina</span>
        </div>
        <div className="hero-title" aria-label="Construyo ideas que funcionan">
          <span className="title-line">CONSTRUYO</span>
          <span className="title-line title-indent">IDEAS QUE</span>
          <span className="title-line title-accent">FUNCIONAN.</span>
        </div>
        <div className="hero-bottom">
          <p>
            Estrategia, diseño y código para convertir problemas reales en
            productos digitales que la gente entiende, usa y recuerda.
          </p>
          <a className="round-link" href="#proyectos" aria-label="Ver proyectos">
            <span>Ver trabajo</span>
            <b>↓</b>
          </a>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <span>PRODUCT · WEB · SYSTEMS ·</span>
        </div>
      </section>

      <section className="manifesto" id="perfil">
        <div className="manifesto-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/perfil.png" alt="Retrato de Gime, diseñador y desarrollador digital" />
          <span className="photo-label">Ese soy yo →</span>
        </div>
        <div className="manifesto-copy">
          <p className="eyebrow">01 / Sobre mí</p>
          <h2>
            No hago “páginas lindas”.<br />
            <em>Construyo herramientas</em><br />
            para mover negocios.
          </h2>
          <div className="manifesto-notes">
            <p>
              Me obsesiona encontrar la forma más clara, útil y memorable de
              resolver un problema. Trabajo de punta a punta: entiendo el
              negocio, diseño la experiencia y la convierto en un producto real.
            </p>
            <p>
              Menos reuniones eternas. Más decisiones con intención, entregas
              concretas y tecnología que sigue funcionando cuando el proyecto crece.
            </p>
          </div>
        </div>
      </section>

      <section className="projects" id="proyectos">
        <div className="section-heading">
          <p className="eyebrow">02 / Trabajo seleccionado</p>
          <h2>Cinco proyectos.<br /><em>Cinco problemas resueltos.</em></h2>
          <span className="project-count">2024—26</span>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project ${project.className}`} key={project.name}>
              <div className="project-meta">
                <span>{project.number}</span>
                <p>{project.kind}</p>
              </div>
              <a
                className="project-visual"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visitar ${project.name}`}
              >
                <div className="project-canvas">{project.preview}</div>
                <span className="visit-badge">Visitar ↗</span>
              </a>
              <div className="project-info">
                <div>
                  <h3>{project.name}</h3>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    {project.displayUrl} ↗
                  </a>
                </div>
                <p>{project.summary}</p>
                <ul>
                  {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities">
        <p className="eyebrow">03 / Qué hago</p>
        <div className="capability-row">
          <span>01</span><h3>Estrategia de producto</h3><p>Encontrar qué construir —y qué no— antes de escribir una línea de código.</p>
        </div>
        <div className="capability-row">
          <span>02</span><h3>Diseño de experiencias</h3><p>Interfaces con jerarquía, personalidad y cero fricción innecesaria.</p>
        </div>
        <div className="capability-row">
          <span>03</span><h3>Desarrollo web</h3><p>Sitios y plataformas veloces, escalables y pensados para durar.</p>
        </div>
        <div className="capability-row">
          <span>04</span><h3>Sistemas a medida</h3><p>Procesos complejos convertidos en herramientas simples para equipos reales.</p>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="contact-top">
          <p className="eyebrow">04 / El próximo puede ser el tuyo</p>
          <span>¿Tenés algo en mente?</span>
        </div>
        <a className="contact-link" href="mailto:hola@integrative.com.ar">
          <span>HABLEMOS</span>
          <b>↗</b>
        </a>
        <div className="contact-footer">
          <p>
            Contame qué querés construir, mejorar o destrabar.<br />
            Respondo personalmente.
          </p>
          <a href="mailto:hola@integrative.com.ar">hola@integrative.com.ar</a>
          <span>© {new Date().getFullYear()} · Hecho con intención</span>
        </div>
      </section>
    </main>
  );
}
