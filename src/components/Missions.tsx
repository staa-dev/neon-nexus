const missions = [
  {
    name: "NEXUS DASHBOARD",
    description: "A real-time analytics dashboard with dark theme UI, live data charts, and interactive filters.",
    tags: ["REACT", "TAILWIND", "CHART.JS"],
    color: "neo-box-primary",
    accent: "text-primary",
  },
  {
    name: "CYBER STORE",
    description: "Full-stack e-commerce platform with cart system, authentication, and payment integration.",
    tags: ["NEXT.JS", "STRIPE", "MONGODB"],
    color: "neo-box-accent",
    accent: "text-accent",
  },
  {
    name: "PIXEL PORTFOLIO",
    description: "A stunning portfolio template with animations, scroll effects, and responsive brutalist design.",
    tags: ["REACT", "FRAMER", "CSS"],
    color: "neo-box-secondary",
    accent: "text-secondary",
  },
];

const Missions = () => {
  return (
    <section id="projects" className="px-4 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-12 text-center">
          <span className="text-accent">▶</span> FEATURED MISSIONS <span className="text-accent">▶</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {missions.map((mission) => (
            <div
              key={mission.name}
              className={`${mission.color} bg-muted p-6 transition-transform duration-200 hover:-translate-y-2 hover:translate-x-1 group`}
            >
              <div className={`font-mono text-xs ${mission.accent} mb-2`}>◆ MISSION ACTIVE</div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3 tracking-wider">
                {mission.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                {mission.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {mission.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-2 border-foreground bg-background px-2 py-1 font-mono text-[10px] text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button className="neo-btn bg-foreground text-background text-xs py-2 px-4 flex-1">
                  ▶ PLAY LIVE
                </button>
                <button className="neo-btn bg-background text-foreground text-xs py-2 px-4 flex-1">
                  { "</>" } VIEW CODE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Missions;
