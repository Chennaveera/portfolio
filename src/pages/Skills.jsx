export default function Skills(){
  const groups = [
    { label: "Languages", items: ["JavaScript, ", "Python, ", "PHP, ", "SQL"] },
    { label: "Frontend", items: ["React, ", "Vite, ", "HTML5, ", "CSS3"] },
    { label: "Backend", items: ["Django (basic), ", "PHP"] },
    { label: "Databases", items: ["MySQL"] },
    { label: "Tools", items: ["Git/GitHub, ", "VS Code, ", "Linux, ", "Postman"] },
  ];

  return (
    <section className="section">
      <h2>Skills</h2>
      <div className="grid">
        {groups.map(g => (
          <div className="card" key={g.label}>
            <strong>{g.label}</strong>
            <div className="chips">
              {g.items.map(i => <span className="chip" key={i}>{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
