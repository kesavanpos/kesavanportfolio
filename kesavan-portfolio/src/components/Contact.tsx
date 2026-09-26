import { profile } from '../data/portfolio'

export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-heading">
          <span>CONTACT</span>
          <h2>Let's Connect</h2>
          <p>Have a project in mind or looking for an experienced software developer? I'd be happy to connect and discuss how I can help.</p>
        </div>
        <div className="contact-links">
          <a className="contact-link" href={`mailto:${profile.email}`}>kesavan.keshav@gmail.com</a>
          <a className="contact-link" href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="contact-link" href="./kesavanresume.docx" download="kesavanresume.docx">Download Resume</a>
        </div>
      </div>
    </section>
  )
}
