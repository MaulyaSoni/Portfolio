import "./Contact.css";
import emailjs from "emailjs-com";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => alert("✅ Message sent successfully!"))
      .catch((err) => alert("❌ Failed to send: " + err.text));

    e.target.reset();
  }

  return (
    <section className="contact" id="contact"data-aos="fade-up">
      <div className="container">
      <h2>Contact Me</h2>
      <form onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      </div>
    </section>
  );
}
