import { motion } from "framer-motion";

const techs = ["WordPress", "Elementor", "HTML", "CSS", "JavaScript","Responsive Design"];

const HeroSection = () => (
  <section className="pb-20 sm:pb-24 md:pb-32 pt-16 sm:pt-20 md:pt-28 text-center">
    <div className=" mx-auto max-w-content px-6">
      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
        <motion.span className="material-symbols-outlined text-sm">verified</motion.span>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className=""
        >
          WordPress + Elementor Project Case Study
        </motion.p>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
      >
        {/* <span className="material-symbols-outlined text-xl">balance</span> */}
        LawCore
        <span className="block text-primary">Legal Services Website</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-6 font-body text-lg leading-relaxed text-muted-foreground"
      >
        LawCore is a professional legal services website built to showcase law firm services in a clear, modern, and trustworthy way. The website focuses on clean layout design, strong typography, and responsive user experience.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 flex flex-wrap gap-2 justify-center"
      >
        {techs.map((tech) => (
          <span
            key={tech}
            className="rounded-sm border border-border bg-card px-3 py-1.5 font-body text-xs font-medium tracking-wide text-foreground"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
