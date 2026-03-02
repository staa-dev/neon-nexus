import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML", level: 90, color: "bg-primary" },
  { name: "CSS", level: 88, color: "bg-secondary" },
  { name: "JAVASCRIPT", level: 85, color: "bg-accent" },
  { name: "REACT", level: 80, color: "bg-primary" },
];

const PlayerStats = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="px-4 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-12 text-center">
          <span className="text-secondary">◈</span> PLAYER STATS <span className="text-secondary">◈</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio card */}
          <div className="neo-box-primary bg-muted p-6 md:p-8">
            <div className="inline-block neo-box bg-primary text-primary-foreground px-3 py-1 font-mono text-xs mb-6">
              LEVEL 10 DEVELOPER
            </div>
            <p className="font-body text-foreground text-base leading-relaxed mb-4">
              A relentless frontend warrior who thrives in the digital battlefield. 
              Specializing in crafting pixel-perfect interfaces and blazing-fast web apps.
            </p>
            <p className="font-body text-foreground text-base leading-relaxed mb-4">
              With years of XP in the trenches of web development, I've mastered 
              the art of turning complex designs into clean, performant code.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["SPEED", "PRECISION", "CREATIVITY", "ENDURANCE"].map((stat) => (
                <span key={stat} className="border-2 border-foreground px-3 py-1 font-mono text-xs text-primary">
                  ★ {stat}
                </span>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div ref={ref} className="neo-box-accent bg-muted p-6 md:p-8 flex flex-col justify-center">
            <h3 className="font-heading text-xl font-bold text-accent mb-6 tracking-wider">
              SKILL TREE
            </h3>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between font-mono text-sm text-foreground mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-5 border-2 border-foreground bg-background">
                    <div
                      className={`h-full ${skill.color} ${visible ? 'bar-animate' : ''}`}
                      style={{ '--bar-width': `${skill.level}%`, width: visible ? `${skill.level}%` : '0%' } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerStats;
