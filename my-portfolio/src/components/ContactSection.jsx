import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch } from "lucide-react"
import { cn } from "@/lib/utils"

function ContactSection() {

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
      >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate?
          Feel free to reach out. I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact information</h3>

            <div className="space-y-6 justify-center">

                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />{" "}
                    </div>
                    <div>
                        <h4 className="font-medium">Phone</h4>
                        <a href="tel:+3725555555" className="text-muted-foreground hover:text-primary transition-colors">
                          +372 55-55-555
                        </a>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />{" "}
                    </div>
                    <div>
                        <h4 className="font-medium">Email</h4>
                        <a href="mailto:myemail@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                          myemail@gmail.com
                        </a>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />{" "}
                    </div>
                    <div>
                        <h4 className="font-medium">Location</h4>
                        <a className="text-muted-foreground hover:text-primary transition-colors">
                          Tallinn, Estonia
                        </a>
                    </div>
                </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4 justify-center">
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

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your name..."
                />
              </div>

               <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="name@email.com..."
                />
              </div>

               <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex item-center justify-center gap-2"
                )}
              >
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