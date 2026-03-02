import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlayerStats from "@/components/PlayerStats";
import Missions from "@/components/Missions";
import Abilities from "@/components/Abilities";
import ContactBase from "@/components/ContactBase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <HeroSection />
      <PlayerStats />
      <Missions />
      <Abilities />
      <ContactBase />
    </div>
  );
};

export default Index;
