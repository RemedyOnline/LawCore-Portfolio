import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const responsibilities = [
  "Built the website using WordPress and Elementor",
  "Designed and structured page layouts",
  "Implemented responsive design for mobile and tablet devices",
  "Organized service sections and content blocks",
  "Optimized visual hierarchy and user flow",
];

const RoleSection = () => (
  <section className="py-16">
    
    <div className="mx-auto max-w-content px-6">
      <SectionHeading>My Role in the Project</SectionHeading>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined">code</span>
          </div>
          <div>
            <p className="font-body text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Role
            </p>
            <p className="mt-1 font-heading text-lg font-semibold text-foreground">
              WordPress Developer
            </p>
          </div>
        </div>

        <div>
          <p className="font-body text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Responsibilities
          </p>
          <ul className="mt-3 space-y-2.5">
            {responsibilities.map((item) => (
              <li
                key={item}
                className="font-body text-base leading-relaxed text-muted-foreground before:mr-3 before:text-primary before:content-['—']"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  </section>
);

export default RoleSection;
