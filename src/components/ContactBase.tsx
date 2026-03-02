import { Github, Instagram, Linkedin } from "lucide-react";

const ContactBase = () => {
  return (
    <section id="contact" className="px-4 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-12 text-center">
          <span className="text-secondary">◈</span> JOIN THE ALLIANCE <span className="text-secondary">◈</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <form
            className="neo-box-secondary bg-muted p-6 md:p-8 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="font-mono text-xs text-secondary block mb-2 tracking-wider">
                PLAYER NAME
              </label>
              <input
                type="text"
                placeholder="Enter your name..."
                className="neo-input w-full"
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
