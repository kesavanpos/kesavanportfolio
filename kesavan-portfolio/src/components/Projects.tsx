import { useState } from 'react'
import { projects } from '../data/portfolio'

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)

  const previousProject = () => {
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length)
  }

  const nextProject = () => {
    setActiveIndex((current) => (current + 1) % projects.length)
  }

  const activeProject = projects[activeIndex]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-heading projects-heading">
          <div>
            <span>PROJECTS</span>
            <h2>Selected work.</h2>
            <p>
              A combination of professional engineering experience and
              practical products built independently.
            </p>
          </div>

          <div className="carousel-controls" aria-label="Project carousel controls">
            <button
              className="carousel-button"
              type="button"
              onClick={previousProject}
              aria-label="Previous project"
            >
              ←
            </button>
            <button
              className="carousel-button"
              type="button"
              onClick={nextProject}
              aria-label="Next project"
            >
              →
            </button>
          </div>
        </div>

        <div className="project-carousel" aria-live="polite">
          <article className="project-slide">
            <div className="project-number">{activeProject.number}</div>

            <div className="project-slide-content">
              <span className="project-status">{activeProject.status}</span>
              <h3>{activeProject.title}</h3>
              <p className="project-description">{activeProject.description}</p>
              <p className="project-tech">{activeProject.tech}</p>
            </div>

            <a className="project-link" href="#contact">
              {activeProject.linkText}
            </a>
          </article>
        </div>

        <div className="carousel-indicators" aria-label="Choose a project">
          {projects.map((project, index) => (
            <button
              key={project.number}
              type="button"
              className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show project ${index + 1}: ${project.title}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>

        <p className="carousel-counter">
          {activeIndex + 1} / {projects.length}
        </p>
      </div>
    </section>
  )
}
