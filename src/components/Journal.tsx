import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Clock, FileText } from "lucide-react";

const articles = [
  {
    category: "SKIN HEALTH",
    title: "Psoriasis vs. Eczema: How Siddha Diagnoses Root Causes",
    description: "Understanding the fundamental differences and how traditional medicine approaches each condition...",
    readTime: "5 min read",
    icon: FileText,
  },
  {
    category: "HAIR CARE",
    title: "Why Hair Greys Prematurely: A Siddha Perspective",
    description: "Explore the dosha imbalances that lead to early greying and natural prevention methods...",
    readTime: "4 min read",
    icon: FileText,
  },
  {
    category: "SIDDHA SCIENCE",
    title: "The Science of 'Pathiyam': Diet Tips for Treatment Efficacy",
    description: "Why diet restrictions enhance Siddha treatment results and which foods to avoid...",
    readTime: "6 min read",
    icon: FileText,
  },
  {
    category: "WELLNESS",
    title: "Understanding Traditional Medicine Safety",
    description: "How to evaluate authenticity, certifications, and what makes Siddha medicines safe...",
    readTime: "3 min read",
    icon: FileText,
  },
];

export function Journal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journal" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[var(--color-neutral-900)] mb-4">
            The Siddha Journal
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Insights, research, and wellness wisdom
          </p>

          <button
            className="inline-flex items-center gap-2 px-6 py-3 text-[var(--color-hero)] border-2 border-[var(--color-hero)] rounded-full hover:bg-[var(--color-hero)] hover:text-white transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-[var(--color-neutral-50)] to-white rounded-2xl p-6 md:p-8 border-2 border-[var(--color-neutral-100)] hover:border-[var(--color-hero)] transition-all duration-[var(--timing-slow)] hover:shadow-xl cursor-pointer h-full flex flex-col">
                  {/* Icon & Category */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#14746f' }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: '#14746f' }}
                    >
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-3 group-hover:text-[var(--color-hero)] transition-colors min-h-[56px]">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-auto flex-1">
                    {article.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>

                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-hero)] group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
