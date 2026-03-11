import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

// list of feature cards with icon, title and description
const featureCards = [
  {
    icon: "balance",
    title: "Professional legal-themed design",
    description: "Tailored aesthetic for legal services",
  },
  {
    icon: "auto_awesome_mosaic",
    title: "Clean and structured layout",
    description: "Clear service presentation",
  },
  {
    icon: "mobile_hand",
    title: "Fully responsive design",
    description: "Desktop, tablet, and mobile optimized",
  },
  {
    icon: "ads_click",
    title: "Clear call-to-action sections",
    description: "Strategic user engagement points",
  },
  {
    icon: "apps",
    title: "Organized service page layouts",
    description: "Intuitive content structure",
  },
  {
    icon: "layers",
    title: "User-friendly navigation structure",
    description: "Easy to find information",
  },
];  

const FeaturesSection = () => (
  <section className="py-16">
    <div className="mx-auto max-w-content px-6">

      {/* mb-20 sm:mb-32
max-w-4xl mx-auto */}
      <SectionHeading>Key Features</SectionHeading>
    </div>
    <section className="max-w-4xl mx-auto mt-8 px-6">
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {featureCards.map(({icon,title,description}) => (
                <div key={title} className="bg-white rounded p-6 shadow-sm border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-0">{title}</h3>
                      <p className="text-sm text-slate-500">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </section>
  </section>

);

export default FeaturesSection;
