export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <small>© {new Date().getFullYear()} Your Name</small>
        <div className="links">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:you@example.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
