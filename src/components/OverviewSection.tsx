import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const OverviewSection = () => (
  <section className="py-16">
    <div className="mx-auto max-w-content px-6">
      <SectionHeading>Project Overview</SectionHeading>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 space-y-4 font-body text-base leading-relaxed text-muted-foreground"
      >
        <p>
          LawCore is a modern legal services website designed for a law firm to present its services professionally and attract potential clients. The website focuses on clarity, trust, and accessibility.
        </p>
        <p>
          The goal of the project was to design a clean, professional, and responsive website that effectively communicates legal services while maintaining a modern digital presence.
        </p>
        <p>
          The site was built using WordPress and Elementor, with careful attention to layout structure, spacing, and responsiveness across devices.
        </p>
      </motion.div>
    </div>
  </section>
);

export default OverviewSection;
