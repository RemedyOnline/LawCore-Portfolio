import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
  >
    {children}
  </motion.h2>
);

export default SectionHeading;
