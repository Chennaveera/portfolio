export default function Home(){
  return (
    <section className="section">
      <div className="hero">
        <img src="/profile.jpg" alt="Your profile" className="avatar" />
        <div className="hero-text">
          <h1>Hi, I'm <span className="accent">CHENNAVEERA HUGAR</span></h1>
          <p className="muted">
            A web developer who enjoys building fast, accessible, and clean web apps with React,
            Node, and modern tooling. I turn ideas into useful, simple user experiences.
          </p>
          <div className="cta">
            <a className="btn" href="/projects">See Projects</a>
            <a className="btn alt" href="/contact">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}
