import emailjs from '@emailjs/browser';
import "../css/contact.css";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch } from "lucide-react"
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';



function ContactSection() {
    const form = useRef();

    const handleSubmit = (e) => {
      e.preventDefault();

       if (!form.current) return;

      emailjs
        .sendForm('service_af9jd5c', 'template_8v88no4', form.current, {
          publicKey: 'JAianBgehIoyUrcCe',
        })
      
     .then(
        () => {
          toast.success('Message sent!');
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send message. Please try again later.');
          console.error('FAILED...', error?.text || error?.message || error);
        }
      );
  };

  return (
    <section id="contact">
      <div className='contact-container'>
        <h2 className="contact-main-heading">
          Get in <span className="contact-main-heading-span">Touch</span>
        </h2>
        <p className="contact-main-paragraph" >
          Have a project in mind or want to collaborate?
          Feel free to reach out. I'm always open to discussing new opportunities.
        </p>
          <div className='contact-info-container'>
            <h3 className="contact-secondary-heading">Contact information</h3>
            <div className='contact-container-boxes' >

              <div className="contact-container-box" >
                <div className="contact-icon-container">
                  <Phone />
                </div>
                <div className='contact-container-box-content'>
                  <h4 >Phone</h4>
                    <a href="tel:+3725555555" >+372 55-55-555</a>
                </div>
              </div>

              <div className="contact-container-box" >
                <div className="contact-icon-container">
                  <Mail />
                </div>
                <div className='contact-container-box-content'>
                  <h4 >Email</h4>
                  <a href="mailto:myemail@gmail.com">myemail@gmail.com</a>
                  </div>
                </div>

                <div className="contact-container-box">
                  <div className="contact-icon-container">
                    <MapPin />
                  </div>
                  <div className='contact-container-box-content'>
                    <h4 >Location</h4>
                    <a>Tallinn, Estonia</a>
                  </div>
                </div>
            </div>

            <div  className="contact-social-container">
              <h4 className="contact-social-heading">Connect with me</h4>
              <div >
                <a className="contact-social-icon" href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin />
                </a>
                <a className="contact-social-icon" href="#" target="_blank" rel="noopener noreferrer">
                    <Facebook />
                </a>
                <a className="contact-social-icon" href="#" target="_blank" rel="noopener noreferrer">
                    <Instagram />
                </a>
                <a className="contact-social-icon" href="#" target="_blank" rel="noopener noreferrer">
                    <Twitch />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form" >
            <h3 className="contact-form-heading">Send message</h3>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="contact-form-cell">
                <label
                  htmlFor="name">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  placeholder="Your name..."
                />
              </div>

               <div className="contact-form-cell">
                <label
                  htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  required
                  placeholder="name@email.com..."
                />
              </div>
               <div className="contact-form-cell">
                <label
                  htmlFor="message">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your message..."
                />
              </div>
                <button className="contact-form-button" type="submit">
                  Send Message
                  <Send size={16} />
              </button>
            </form>
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
    </section>
  )
}

export default ContactSection