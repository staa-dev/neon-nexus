import { Code2, Palette, Layout, Zap } from "lucide-react";

const abilities = [
  {
    icon: Code2,
    name: "WEB DEVELOPMENT",
    description: "Building fast, modern, and scalable web applications with cutting-edge tech stacks.",
    border: "neo-box-primary",
    iconColor: "text-primary",
  },
  {
    icon: Palette,
    name: "UI/UX DESIGN",
    description: "Crafting bold, intuitive interfaces that users remember. Clean layouts, killer typography.",
    border: "neo-box-accent",
    iconColor: "text-accent",
  },
  {
    icon: Layout,
    name: "LANDING PAGES",
    description: "High-converting landing pages designed to grab attention and drive action instantly.",
    border: "neo-box-secondary",
    iconColor: "text-secondary",
  },
  {
    icon: Zap,
    name: "AUTOMATION & TOOLS",
    description: "Digital tools and automated workflows that save time and boost productivity.",
    border: "neo-box-primary",
    iconColor: "text-primary",
  },
];

const Abilities = () => {
  return (
    <section id="abilities" className="px-4 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-12 text-center">
          <span className="text-primary">⚡</span> ABILITIES UNLOCKED <span className="text-primary">⚡</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {abilities.map((ability) => (
            <div
              key={ability.name}
              className={`${ability.border} bg-muted p-6 transition-all duration-200 hover:-translate-y-1`}
            >
              <ability.icon className={`w-10 h-10 ${ability.iconColor} mb-4`} strokeWidth={2.5} />
              <h3 className="font-heading text-lg font-bold text-foreground mb-2 tracking-wider">
                {ability.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {ability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Abilities;
