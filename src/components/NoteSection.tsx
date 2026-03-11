import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const NoteSection = () => (
  <section className="py-16">
    <div className="mx-auto max-w-content px-6">
      <SectionHeading>Project Availability</SectionHeading>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 border-l-4 border-amber-400 bg-amber-100 px-6 py-5"
      >
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-amber-500 text-3xl">info</span>
          <div>
          <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Project Status</h4>
          <p className="font-body text-base leading-relaxed text-amber-700">
            The live version of this website is currently offline because it was originally hosted on a temporary hosting platform. The screenshots above showcase the complete design and layout of the project.
          </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default NoteSection;
