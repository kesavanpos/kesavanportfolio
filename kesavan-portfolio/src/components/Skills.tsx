import { skillGroups } from '../data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading">
          <span>SKILLS</span>
          <h2>Tools I build with.</h2>
          <p>A practical technology stack built through years of software engineering and product development.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
