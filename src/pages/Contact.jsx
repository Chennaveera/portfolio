export default function Contact(){
  const submit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    alert(`Thanks, ${name}! This form is a UI only.\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <section className="section">
      <h2>Contact</h2>
      <form className="form" onSubmit={submit}>
        <label>
          <span className="sr-only">Name</span>
          <input name="name" placeholder="Your name" required />
        </label>
        <label>
          <span className="sr-only">Email</span>
          <input name="email" type="email" placeholder="you@email.com" required />
        </label>
        <label>
          <span className="sr-only">Message</span>
          <textarea name="message" rows="5" placeholder="Your message..." required></textarea>
        </label>
        <button className="btn" type="submit">Send</button>
      </form>
      <p className="muted center" style={{marginTop:12}}>Prefer email? <a href="mailto:you@example.com">you@example.com</a></p>
    </section>
  )
}
