export default function Projects(){
  const data = [
    {
      title: "Digital Product Selling Platform",
      desc: "A full‑stack platform to sell ebooks/templates with payments and admin.",
      github: "https://github.com/Chennaveera/Digtal",
      live: "#"
    },
    {
      title: "Online Store",
      desc: "An e-commerce platform for buying and selling products.",
      github: "https://github.com/Chennaveera/KLE",
      live: "#"
    },
    {
      title: "Task Manager",
      desc: "CRUD task manager with authentication and filters.",
      github: "https://github.com/Chennaveera/task-manager",
      live: "#"
    }
  ];

  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="grid">
        {data.map(p => (
          <article className="card project" key={p.title}>
            <h3>{p.title}</h3>
            <p className="muted">{p.desc}</p>
            <div className="actions">
              <a className="btn" href={p.live} target="_blank" rel="noreferrer">Live</a>
              <a className="btn alt" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
