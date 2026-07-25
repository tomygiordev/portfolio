const projects = [
  {
    number: "01",
    name: "NicTech",
    type: "E-commerce + gestión",
    url: "https://nictech.com.ar",
    summary: "Tienda, seguimiento de reparaciones y panel de administración en una misma plataforma.",
    stack: "React · Supabase",
    tone: "lime",
  },
  {
    number: "02",
    name: "WP Construcciones",
    type: "Web corporativa",
    url: "https://wpconstrucciones.com",
    summary: "Una presencia digital técnica y profesional para especialistas en Steel Frame.",
    stack: "Diseño · Desarrollo",
    tone: "paper",
  },
  {
    number: "03",
    name: "Integrative",
    type: "Agencia digital",
    url: "https://integrative.help",
    summary: "Sitio comercial multipágina con identidad propia, servicios y productos SaaS.",
    stack: "Branding · Web",
    tone: "blue",
  },
  {
    number: "04",
    name: "Contabilidad práctica",
    type: "Landing de conversión",
    url: "https://curso-contabilidad-practica.pages.dev",
    summary: "Una propuesta educativa compleja transformada en un recorrido simple y convincente.",
    stack: "UX · Storytelling",
    tone: "orange",
  },
  {
    number: "05",
    name: "NextCampus",
    type: "Producto educativo",
    url: "https://nextcampus.space",
    summary: "Materias, apuntes, calendario y correlativas en una experiencia académica centralizada.",
    stack: "Product · Full-stack",
    tone: "sky",
  },
];

const services = [
  {
    number: "01",
    title: "Web para tu negocio",
    text: "Una página profesional, rápida y pensada para que tus clientes entiendan qué hacés y te contacten.",
  },
  {
    number: "02",
    title: "Landing que convierte",
    text: "Una página enfocada en vender un servicio, curso o producto con un mensaje claro y una acción concreta.",
  },
  {
    number: "03",
    title: "Web + sistema",
    text: "Cuando además de mostrar necesitás gestionar: stock, clientes, turnos, reparaciones o procesos internos.",
  },
];

export default function Home() {
  return (
    <main>
      <div className="grain" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Ir al inicio">TRG<span>•</span></a>
        <nav aria-label="Navegación principal">
          <a href="#trabajos">Trabajos</a>
          <a href="#servicios">Servicios</a>
          <a href="#sobre-mi">Sobre mí</a>
        </nav>
        <a className="header-cta" href="https://wa.me/543435220920" target="_blank" rel="noreferrer">
          Hablemos <span>↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="hero-eyebrow"><i /> Diseñador y desarrollador web · Paraná, Argentina</p>
          <h1>
            <span>Tomás Roldán</span>
            <strong>Giorgi.</strong>
          </h1>
          <h2>
            Diseño páginas web que hacen ver
            <em> profesional</em> a tu negocio.
          </h2>
          <p className="hero-description">
            Me encargo de todo: estrategia, diseño, desarrollo y publicación.
            Vos me contás qué necesitás; yo lo convierto en una web clara,
            rápida y lista para generar consultas.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="https://wa.me/543435220920" target="_blank" rel="noreferrer">
              Quiero mi página web <span>↗</span>
            </a>
            <a className="text-button" href="#trabajos">Ver trabajos <span>↓</span></a>
          </div>
          <div className="hero-links">
            <a href="https://github.com/tomygiordev" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/tomasroldangiorgi" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="mailto:tomasroldangiorgi@gmail.com">Email ↗</a>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/portfolio/perfil.png" alt="Tomás Roldán Giorgi, diseñador y desarrollador web" />
          </div>
          <div className="portrait-note">
            <span>Hola, soy Tomás.</span>
            <p>Diseño la web y también escribo el código.</p>
          </div>
          <div className="portrait-stamp" aria-hidden="true">WEB<br />DEV</div>
        </div>

        <div className="hero-proof">
          <div><strong>5+</strong><span>sitios publicados</span></div>
          <div><strong>100%</strong><span>a medida</span></div>
          <div><strong>Full-stack</strong><span>de la idea al online</span></div>
          <div><strong>Directo</strong><span>hablás conmigo</span></div>
        </div>
      </section>

      <section className="work" id="trabajos">
        <div className="section-intro">
          <div>
            <p className="section-label">01 / Trabajo seleccionado</p>
            <h2>Webs reales para<br /><em>negocios reales.</em></h2>
          </div>
          <p>
            Cada proyecto parte de un problema distinto. La solución también:
            no uso plantillas repetidas ni hago dos webs iguales.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <a
              className={`project-card ${project.tone}`}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              key={project.name}
              aria-label={`Visitar ${project.name}`}
            >
              <div className="project-top">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>
              <div className="project-mark" aria-hidden="true">
                {project.name.split(" ").map((word) => word[0]).join("").slice(0, 2)}
              </div>
              <div className="project-bottom">
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div><span>{project.stack}</span><b>Ver web ↗</b></div>
              </div>
            </a>
          ))}

          <div className="project-card project-more">
            <p className="section-label">También construyo</p>
            <ul>
              <li><span>Apiario OS</span><small>Sistema de trazabilidad</small></li>
              <li><span>Ragy</span><small>Asistente académico IA</small></li>
              <li><span>AppGeoCimenta</span><small>Automatización de obra</small></li>
            </ul>
            <a href="https://github.com/tomygiordev" target="_blank" rel="noreferrer">
              Ver más en GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <section className="services" id="servicios">
        <div className="services-heading">
          <p className="section-label">02 / Cómo puedo ayudarte</p>
          <h2>Tu negocio merece<br />una web a la altura.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article key={service.title}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
        <div className="process">
          <p className="section-label">Un proceso simple</p>
          <div><span>1</span><b>Me contás tu idea</b></div>
          <i>→</i>
          <div><span>2</span><b>Diseño y desarrollo</b></div>
          <i>→</i>
          <div><span>3</span><b>La publicamos</b></div>
        </div>
      </section>

      <section className="about" id="sobre-mi">
        <div className="about-title">
          <p className="section-label">03 / Quién está detrás</p>
          <h2>Técnica para construir.<br /><em>Criterio para decidir.</em></h2>
        </div>
        <div className="about-copy">
          <p>
            Soy Tomás, desarrollador full-stack y estudiante avanzado de
            Licenciatura en Sistemas de Información en la FCYT–UADER.
            No sólo programo: entiendo el negocio, ordeno el problema y propongo
            una solución que tenga sentido.
          </p>
          <div className="about-facts">
            <div>
              <span>Experiencia</span>
              <p>WP Steel Frame · NicTech · GeoCimenta</p>
            </div>
            <div>
              <span>Tecnologías</span>
              <p>React · Next.js · TypeScript · .NET · Supabase · SQL</p>
            </div>
            <div>
              <span>Formación</span>
              <p>Análisis de Sistemas 82% · Cisco Cybersecurity</p>
            </div>
          </div>
          <a className="cv-link" href="/portfolio/CV-Tomas-Roldan-Giorgi.pdf" target="_blank">
            Ver currículum completo <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="contact" id="contacto">
        <div>
          <p className="section-label">¿Tenés un negocio o una idea?</p>
          <h2>Hagamos una web<br />que dé ganas de <em>elegirte.</em></h2>
        </div>
        <div className="contact-actions">
          <a href="https://wa.me/543435220920" target="_blank" rel="noreferrer">
            Escribime por WhatsApp <span>↗</span>
          </a>
          <a href="mailto:tomasroldangiorgi@gmail.com">tomasroldangiorgi@gmail.com</a>
        </div>
        <div className="footer-line">
          <span>Tomás Roldán Giorgi</span>
          <span>Paraná, Entre Ríos · Argentina</span>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
