import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const lessons = [
  {
    icon: "layers",
    title: "Visual Hierarchy",
  },
  {
    icon: "space_dashboard",
    title: "Spacing & Layout",
  },
  {
    icon: "touch_app",
    title: "Usability Focus",
  },
  {
    icon: "business_center",
    title: "Professional Design",
  },
];

const LearnedSection = () => (
  <section className="py-16">
    <div className="mx-auto max-w-content px-6">
      <SectionHeading>What I Learned From This Project</SectionHeading>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 space-y-4 font-body text-base leading-relaxed text-muted-foreground"
      >
        <p>
          This project helped strengthen my skills in WordPress website development using Elementor. It also improved my ability to structure professional service websites, design clean layouts, and implement responsive user interfaces.
        </p>
        <p>
          The experience reinforced the importance of visual hierarchy, spacing, and usability when building websites for service-based businesses.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {lessons.map(({ icon, title }) => (
            <div key={title} className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-background-dark rounded-xl">
              <span className="material-symbols-outlined text-primary text-2xl">{icon}</span>
              <span className="text-sm font-medium text-center">{title}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default LearnedSection;
