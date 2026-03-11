import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

import homePage from "@/img/homePage-LawCore.png";
import aboutUs from "@/img/aboutUsPage-LawCore.png";
import blogsPage from "@/img/BlogsPage-lawCore.png";
import servicesPage from "@/img/ServicesPage-LawCore.png";
import oneServicePage from "@/img/FamilyLaw-ServicePage-LawCore.png";
import contactPage from "@/img/ContactPage-LawCore.png";

const images = [
  { src: homePage, caption: "Homepage Design", desc: "Modern landing page with hero section and service overview" },
  { src: servicesPage, caption: "Services Page", desc: "Detailed legal services presentation with organized layout" },
  { src: aboutUs, caption: "About Page", desc: "Professional team and firm information display" },
  { src: contactPage, caption: "Contact Page", desc: "Easy-to-use contact form and office information" },
  { src: oneServicePage, caption: "Single Service Page", desc: "Optimized mobile experience with touch-friendly navigation" },
  { src: blogsPage, caption: "Blogs Page", desc: "Blogs and Trending Legal News" },
];

const NewGallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading>Project Gallery</SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8"
        >
          {/* Main image */}
          <div className="relative w-full h-[480px] overflow-y-auto rounded-sm border border-border bg-card">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={images[activeIndex].src}
                alt={images[activeIndex].caption}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full object-contain"
              />
            </AnimatePresence>
          </div>

          <p className="mt-3 text-center font-body text-sm font-medium text-foreground">
            {images[activeIndex].caption}
          </p>
          <p className="text-center font-light text-gray-600 text-sm">{images[activeIndex].desc}</p>

          {/* Thumbnails */}
          <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={img.caption}
                onClick={() => setActiveIndex(i)}
                className={`relative flex-shrink-0 overflow-hidden rounded-sm border transition-all duration-200 ${
                  i === activeIndex
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border opacity-60 hover:opacity-100"
                }`}
                style={{ width: "120px", height: "68px" }}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewGallerySection;
