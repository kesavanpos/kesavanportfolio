import { profile } from '../data/portfolio'

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">SOFTWARE DEVELOPER</span>
          <h1>Building digital experiences with code.</h1>
          <p className="hero-description">
            Hi, I'm Kesavan. A software developer with 15+ years of experience
            in web development, frontend engineering, full stack development,
            and modern JavaScript technologies.
          </p>
          <div className="hero-buttons">
            <a className="btn btn-primary" href="#projects">View My Projects →</a>
            <a className="contact-link" href="/resume/kesavanresume.docx" download="kesavanresume.docx">Download Resume</a>
          </div>
          <p className="tech-note">TypeScript · JavaScript · C# · Angular · React · Node.js</p>
        </div>

        <aside className="profile-card">
          <div className="profile-avatar">K</div>
          <h2>{profile.name}</h2>
          <p className="profile-role">{profile.role}</p>
          <div className="profile-details">
            <div><span>Experience</span><strong>15 Years</strong></div>
            <div><span>Core Focus</span><strong>Web Development</strong></div>
            <div><span>Primary Stack</span><strong>TypeScript / JavaScript</strong></div>
            <div><span>Frontend</span><strong>Angular / React</strong></div>
            <div><span>Backend</span><strong>Node.js</strong></div>
          </div>
        </aside>
      </div>
    </section>
  )
}
