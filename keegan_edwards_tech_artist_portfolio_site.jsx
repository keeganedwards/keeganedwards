import React, { useState } from "react";

const portfolioData =
  typeof window !== "undefined" ? window.PORTFOLIO_DATA : null;

function renderMarkdown(value) {
  if (typeof window !== "undefined" && window.marked) {
    return window.marked.parse(String(value || ""));
  }
  return String(value || "");
}

function WindowBar({ title, onClose }) {
  return (
    <div className="window-bar">
      {title ? <div className="window-title">{title}</div> : <div />}
      {onClose ? (
        <button className="close" type="button" onClick={onClose} aria-label="Close window">
          x
        </button>
      ) : null}
    </div>
  );
}

export default function App() {
  const [modal, setModal] = useState(null);
  const data = portfolioData;

  if (!data) return null;

  return (
    <div>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#top" aria-label={`${data.brand.name} home`}>
            <span className="brand-name">{data.brand.name}</span>
            <span className="brand-title">{data.brand.title}</span>
          </a>
          <nav className="nav" aria-label="Main navigation">
            {data.games.map((game) => (
              <a href={`#${game.id}`} key={game.id}>{game.title}</a>
            ))}
            <button type="button" onClick={() => setModal({ type: "about" })}>About</button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap" aria-labelledby="intro-title">
          <div className="window">
            <WindowBar />
            <div className="hero-content">
              <h1 id="intro-title">{data.intro.title}</h1>
              <div
                className="hero-copy rich-text"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(data.intro.text) }}
              />
            </div>
          </div>
        </section>

        <div className="wrap">
          {data.games.map((game) => (
            <section className="section" id={game.id} key={game.id}>
              <article className="window">
                <WindowBar title={game.title} />
                <div
                  className={`game-banner ${game.bannerPosition === "top" ? "banner-top" : ""}`}
                  style={{ backgroundImage: `url('${game.banner}')` }}
                >
                  <div className="game-banner-inner">
                    <h2>{game.title}</h2>
                  </div>
                </div>
                <div className="tile-grid">
                  {game.projects.map((project) => (
                    <button
                      className={`tile ${project.thumbnailPosition === "top" ? "tile-top-image" : ""}`}
                      type="button"
                      key={project.id}
                      onClick={() => setModal({ type: "project", game, project })}
                    >
                      <div className="tile-media">
                        <img src={project.images[0].src} alt={project.title} />
                      </div>
                      <div className="tile-body">
                        <h3>{project.title}</h3>
                      </div>
                    </button>
                  ))}
                </div>
              </article>
            </section>
          ))}
        </div>
      </main>

      <footer className="footer wrap">(c) {new Date().getFullYear()} {data.brand.name}</footer>

      {modal ? <Modal data={data} modal={modal} onClose={() => setModal(null)} /> : null}
    </div>
  );
}

function Modal({ data, modal, onClose }) {
  const title =
    modal.type === "project"
      ? `${modal.game.title} / ${modal.project.title}`
      : "About";

  return (
    <div className="modal-backdrop open" aria-hidden="false" onClick={onClose}>
      <section
        className={`modal-window ${modal.type === "project" ? "wide" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
        onClick={(event) => event.stopPropagation()}
      >
        <WindowBar title={title} onClose={onClose} />
        <div className="modal-content">
          {modal.type === "project" ? <ProjectGallery project={modal.project} /> : null}
          {modal.type === "about" ? <AboutInfo data={data} /> : null}
        </div>
      </section>
    </div>
  );
}

function AboutInfo({ data }) {
  const about = data.infoWindows.about;

  return (
    <div className="about-popout">
      <div className="profile-icon" aria-hidden="true">
        {about.profileImage ? <img src={about.profileImage} alt="" /> : <span>KE</span>}
      </div>
      <div className="about-copy">
        <h2>{about.title}</h2>
        <div
          className="rich-text"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(about.text) }}
        />
      </div>
      <div className="contact-panel">
        <h3>Contact</h3>
        <div className="contact-links">
          <a href={data.brand.email}>Email</a>
          <a href={data.brand.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={data.brand.resume} target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
    </div>
  );
}

function ProjectGallery({ project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = project.images[activeIndex];
  const showImage = (nextIndex) => {
    setActiveIndex((nextIndex + project.images.length) % project.images.length);
  };

  return (
    <div className="project-viewer">
      <div className="viewer-stage">
        <img
          className="viewer-image"
          src={activeImage.src}
          alt={activeImage.title || project.title}
        />
        <button
          className="viewer-arrow viewer-arrow-left"
          type="button"
          onClick={() => showImage(activeIndex - 1)}
          aria-label="Previous image"
        >
          {"<"}
        </button>
        <button
          className="viewer-arrow viewer-arrow-right"
          type="button"
          onClick={() => showImage(activeIndex + 1)}
          aria-label="Next image"
        >
          {">"}
        </button>
      </div>
      <div className="thumb-strip" aria-label="Project images">
        {project.images.map((image, index) => (
          <button
            className={`thumb-button ${index === activeIndex ? "active" : ""}`}
            type="button"
            key={image.src}
            onClick={() => showImage(index)}
            aria-label={`Show ${image.title || project.title}`}
          >
            <img src={image.src} alt="" />
          </button>
        ))}
      </div>
      <section className="project-detail">
        <h3>{project.title}</h3>
        <div className="description-panel">
          <div
            className="rich-text"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(project.text) }}
          />
        </div>
      </section>
    </div>
  );
}

