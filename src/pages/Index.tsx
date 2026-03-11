import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import RoleSection from "@/components/RoleSection";
import TechSection from "@/components/TechSection";
import FeaturesSection from "@/components/FeaturesSection";
import NoteSection from "@/components/NoteSection";
import LearnedSection from "@/components/LearnedSection";
import ContactSection from "@/components/ContactSection";
import NewGallerySection from "@/components/NewGallerySection";

const Index = () => (
  <main className="min-h-screen bg-background">
    <HeroSection />

    <div className="mx-auto max-w-content">
      <hr className="border-border" />
    </div>

    <OverviewSection />

    <div className="mx-auto max-w-content">
      <hr className="border-border" />
    </div>

    <RoleSection />

    <div className="mx-auto max-w-content">
      <hr className="border-border" />
    </div>

    <TechSection />

    <div className="mx-auto max-w-content">
      <hr className="border-border" />
    </div>

    <FeaturesSection />

    <div className="mx-auto max-w-content">
      <hr className="border-border" />
    </div>

    <NewGallerySection />

    <div className="mx-auto max-w-content">
      <hr className="border-border" />
    </div>

    <NoteSection />

    <div className="mx-auto max-w-content">
      <hr className="border-border" />
    </div>

    <LearnedSection />

    <div className="mx-auto max-w-content">
      <hr className="border-border" />
    </div>

    <ContactSection />

    <footer className="border-t border-border py-8">
      <p className="text-center font-body text-sm text-muted-foreground">
        © 2026 Michael Agyemang Prempeh | All rights reserved | Designed for LawCore Case Study.
      </p>
    </footer>
  </main>
);

export default Index;
