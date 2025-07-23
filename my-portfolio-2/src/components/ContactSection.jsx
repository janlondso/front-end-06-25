import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch } from "lucide-react"

function ContactSection() {

  return (
    <section id="contact">
      <div>
        <h2>
            Get in <span >Touch</span>
        </h2>
        <p >
          Have a project in mind or want to collaborate?
          Feel free to reach out. I'm always open to discussing new opportunities.
        </p>
        <div>
          <div>
            <h3>Contact information</h3>

            <div >

                <div >
                    <div>
                      <Phone />{" "}
                    </div>
                    <div>
                        <h4 >Phone</h4>
                        <a href="tel:+3725555555" >
                          +372 55-55-555
                        </a>
                    </div>
                </div>

                <div >
                    <div >
                      <Mail  />{" "}
                    </div>
                    <div>
                        <h4 >Email</h4>
                        <a href="mailto:myemail@gmail.com" >
                          myemail@gmail.com
                        </a>
                    </div>
                </div>

                <div >
                    <div>
                      <MapPin />{" "}
                    </div>
                    <div>
                        <h4 >Location</h4>
                        <a>
                          Tallinn, Estonia
                        </a>
                    </div>
                </div>
            </div>

            <div >
              <h4 >Connect with me</h4>
              <div >
                <a href="#" target="_blank">
                    <Linkedin />
                </a>
                <a href="#" target="_blank">
                    <Facebook />
                </a>
                <a href="#" target="_blank">
                    <Instagram />
                </a>
                <a href="#" target="_blank">
                    <Twitch />
                </a>
              </div>
            </div>
          </div>

          <div >
            <h3 >Send message</h3>

            <form >
              <div>
                <label
                  htmlFor="name">
                  {" "}
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name..."
                />
              </div>

               <div>
                <label
                  htmlFor="email">
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="name@email.com..."
                />
              </div>

               <div>
                <label
                  htmlFor="message">
                  {" "}
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your message..."
                />
              </div>
              
              <button type="submit">
                Send Message
                <Send size={16} />
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection