import { Github, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const ContactBase = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:destadwinurmansya6448@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-4 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-12 text-center">
          <span className="text-secondary">◈</span> JOIN THE ALLIANCE <span className="text-secondary">◈</span>
        </h2>

        {/* Contact Info Bar */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="neo-box-primary bg-muted p-5 flex items-start gap-4">
            <Mail className="w-6 h-6 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
            <div>
              <h4 className="font-mono text-xs text-primary tracking-wider mb-1">EMAIL</h4>
              <a href="mailto:destadwinurmansya6448@gmail.com" className="font-body text-xs text-foreground break-all hover:text-primary transition-colors">
                destadwinurmansya6448@gmail.com
              </a>
            </div>
          </div>
          <div className="neo-box-accent bg-muted p-5 flex items-start gap-4">
            <Phone className="w-6 h-6 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
            <div>
              <h4 className="font-mono text-xs text-accent tracking-wider mb-1">PHONE</h4>
              <a href="tel:+6287726500526" className="font-body text-sm text-foreground hover:text-accent transition-colors">
                +62 877-2650-0526
              </a>
            </div>
          </div>
          <div className="neo-box-secondary bg-muted p-5 flex items-start gap-4">
            <MapPin className="w-6 h-6 text-secondary shrink-0 mt-0.5" strokeWidth={2.5} />
            <div>
              <h4 className="font-mono text-xs text-secondary tracking-wider mb-1">BASE LOCATION</h4>
              <p className="font-body text-sm text-foreground">Lampung, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <form
            className="neo-box-secondary bg-muted p-6 md:p-8 space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="font-mono text-xs text-secondary block mb-2 tracking-wider">
                PLAYER NAME
              </label>
              <input
                type="text"
                placeholder="Enter your name..."
                className="neo-input w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="font-mono text-xs text-secondary block mb-2 tracking-wider">
                EMAIL FREQUENCY
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="neo-input w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="font-mono text-xs text-secondary block mb-2 tracking-wider">
                TRANSMISSION
              </label>
              <textarea
                rows={4}
                placeholder="Type your message..."
                className="neo-input w-full resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="neo-btn bg-secondary text-secondary-foreground w-full text-base mt-2">
              ▶ SEND TRANSMISSION
            </button>
          </form>

          {/* Social links */}
          <div className="flex flex-col justify-between gap-6">
            <div className="neo-box bg-muted p-6 md:p-8">
              <h3 className="font-heading text-lg font-bold text-primary mb-4 tracking-wider">
                CONNECT
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                Ready to team up? Drop a message or find me on these platforms. 
                Let's build something legendary together.
              </p>
              <div className="space-y-3">
                <a
                  href="#"
                  className="neo-btn bg-foreground text-background w-full flex items-center justify-center gap-3 text-sm"
                >
                  <Github className="w-5 h-5" /> GITHUB
                </a>
                <a
                  href="#"
                  className="neo-btn bg-accent text-accent-foreground w-full flex items-center justify-center gap-3 text-sm"
                >
                  <Instagram className="w-5 h-5" /> INSTAGRAM
                </a>
                <a
                  href="#"
                  className="neo-btn bg-secondary text-secondary-foreground w-full flex items-center justify-center gap-3 text-sm"
                >
                  <Linkedin className="w-5 h-5" /> LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t-4 border-foreground pt-8 text-center">
          <p className="font-mono text-xs text-muted-foreground tracking-wider">
            © 2026 STAA DEV — ALL RIGHTS RESERVED — GAME ON
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactBase;
