import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const techs = ["WordPress", "Elementor",  "MetForm", "Royal Addons for Elementor", "WP Mail SMTP", "JavaScript", "Custom HTML & CSS","Responsive Design", "InfinityFree (hosting used during development)"];

const TechSection = () => (
  <section className="py-16">
    <div className="mx-auto max-w-content px-6">
      <SectionHeading>Technologies Used</SectionHeading>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 flex flex-wrap gap-3"
      >
        {techs.map((tech) => (
          <span
            key={tech}
            className="rounded-sm border border-border bg-card px-4 py-2 font-body text-sm font-medium text-foreground shadow-sm"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TechSection;
