import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ContactSection = () => (
  <section className="py-16">
    <section className="mb-4 mx-auto max-w-content px-6">
          <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-4xl mx-auto mt-6">
            <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-center">
            <SectionHeading><span className="text-white ">Get In Touch</span></SectionHeading>
              <p className="text-xl text-slate-300 my-2">Michael Agyemang Prempeh</p>
              <p className="text-lg text-slate-400 mb-8">Frontend Developer | No-Code Developer | IT Support Technician</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://linkedin.com/in/agyemangmichael233" target="_blank"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors"
                >
                  <span className="material-symbols-outlined">id_card</span>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/RemedyOnline" target="_blank"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors"
                >
                  <span className="material-symbols-outlined">code_xml</span>
                  GitHub
                </a>
                <a
                  href="https://agyemangprempehmike.netlify.app" target="_blank"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors"
                >
                  <span className="material-symbols-outlined">link_2</span>
                  Full Portfolio
                </a>
                <a  href="/src/assets/My_CV-Michael_Agyemang_Prempeh.pdf" rel="noopener noreferrer" download="My_CV-Michael_Agyemang_Prempeh.pdf" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors"
                >
                  <span className="material-symbols-outlined">download</span>
                  CV
                </a>
                <a
                  href="mailto:agyemangmichael555@gmail.com" target=""
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/70 transition-colors"
                >
                  <span className="material-symbols-outlined">alternate_email</span>
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        </section>
  </section>
);

// https://github.com/RemedyOnline
// https://linkedin.com/in/agyemangmichael233
// https://agyemangprempehmike.netlify.app/
// (my cv in assets folder)
export default ContactSection;
