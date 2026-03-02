const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Level badge */}
        <div className="inline-block neo-box bg-accent text-accent-foreground px-4 py-2 mb-8 font-mono text-xs tracking-widest">
          ◆ PLAYER ONE READY ◆
        </div>

        {/* Main heading with glitch */}
        <h1
          className="glitch-text text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold text-foreground mb-6 leading-none"
          data-text="STAA DEVELOPER"
        >
          STAA DEVELOPER
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary tracking-[0.3em] mb-4">
          CODE • BUILD • DOMINATE
        </p>

        {/* Tagline */}
        <p className="text-base sm:text-lg font-mono text-muted-foreground mb-12 cursor-blink">
          Frontend Warrior &amp; Digital Architect
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#about" className="neo-btn bg-primary text-primary-foreground text-base">
            ▶ ENTER ARENA
          </a>
          <a href="#projects" className="neo-btn bg-accent text-accent-foreground text-base">
            ◈ VIEW PROJECTS
          </a>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t-4 border-l-4 border-primary" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-secondary" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b-4 border-l-4 border-accent" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-primary" />
    </section>
  );
};

export default HeroSection;
