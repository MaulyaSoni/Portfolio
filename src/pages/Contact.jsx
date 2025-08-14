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
    <section className="contact" id="contact" data-aos="fade-up">
      <div className="container">
        <h2 className="gradient-text fade-up">Contact  me</h2>
        <p className="subtitle">
          Want to collaborate or having  a question ?  Drop me a message below.
        </p>

        <div className="contact-wrapper">
          {/* Contact Info */}
          {/* <div className="contact-info">
            <div className="info-item">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h4>Location</h4>
                <p>Nadiad, Gujarat</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fa-regular fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>maulya@abc.com</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fa-solid fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div> */}
          
          {/* Contact Form */}
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">
              Send Message <i className="fa-regular fa-message"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
