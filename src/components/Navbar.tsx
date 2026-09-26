export function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a className="logo" href="#home">Kesavan.</a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="nav-cta" href="#contact">Let's Talk</a>
        </div>
      </div>
    </nav>
  )
}
