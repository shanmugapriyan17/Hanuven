import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Siddha Medicine?",
    answer: "Siddha Medicine is one of the world's oldest healing systems, originating over 5,000 years ago in South India. It uses natural herbs, minerals, and oils to treat ailments holistically — addressing root causes, not just symptoms. Our formulations are based on authentic Siddha texts passed down through generations.",
  },
  {
    question: "Are your products safe to use?",
    answer: "Absolutely! Our products are 100% natural with no synthetic chemicals or parabens. They are manufactured in GMP-certified facilities with rigorous quality testing. They're safe for external use as directed. We recommend a patch test for those with sensitive skin.",
  },
  {
    question: "How long until I see results?",
    answer: "Results vary by product and condition:\n• Skin Oil (Psoriasis): 4-8 weeks of consistent use\n• Hair Oil: 4-12 weeks with 3x/week application\n\nNatural healing takes time but provides lasting results without side effects.",
  },
  {
    question: "Can I use during pregnancy?",
    answer: "Please consult your physician before using any new products during pregnancy or breastfeeding. Our wellness consultants are also available to answer specific questions and provide personalized guidance.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept UPI, credit/debit cards, and net banking via Razorpay. All payments are SSL encrypted and secure. Cash on Delivery (COD) is currently not available.",
  },
  {
    question: "What is your shipping policy?",
    answer: "We offer Pan-India shipping. Orders are dispatched within 24-48 hours. Delivery takes 3-7 business days. Free shipping on all orders above ₹500!",
  },
  {
    question: "How should I store the products?",
    answer: "Store all Hanuven products in a cool, dry place away from direct sunlight. Keep the bottles tightly sealed when not in use. Proper storage ensures maximum potency and shelf life of 24 months from the date of manufacture.",
  },
  {
    question: "Are your products cruelty-free and vegan?",
    answer: "Yes! All Hanuven products are cruelty-free and not tested on animals. Our formulations use only plant-based, ethically sourced ingredients. We're proudly committed to sustainable and responsible practices.",
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-[var(--color-accent-1)]/20 text-[var(--color-hero)] rounded-full text-sm uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-[var(--color-neutral-900)] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Everything you need to know about Hanuven and Siddha medicine.
            Can't find your answer? Reach out to our support team.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div
                className={`bg-[var(--color-neutral-50)] rounded-2xl border-2 transition-all duration-[var(--timing-normal)] overflow-hidden ${openIndex === index
                    ? "border-[var(--color-accent-1)] shadow-lg"
                    : "border-transparent hover:border-[var(--color-neutral-100)]"
                  }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 group"
                  aria-expanded={openIndex === index}
                >
                  <h4 className="text-[var(--color-neutral-900)] group-hover:text-[var(--color-hero)] transition-colors flex-1 pr-4">
                    {faq.question}
                  </h4>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-[var(--timing-normal)] ${openIndex === index
                        ? "bg-[var(--color-hero)] text-white rotate-180"
                        : "bg-white text-[var(--color-hero)] group-hover:bg-[var(--color-hero)] group-hover:text-white"
                      }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="h-px bg-gradient-to-r from-[var(--color-accent-1)]/20 to-transparent mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          className="mt-12 text-center bg-gradient-to-br from-[var(--color-accent-1)]/10 to-transparent rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4 className="mb-3">Still have questions?</h4>
          <p className="text-gray-600 mb-6">
            Our wellness consultants are here to help you on your healing journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-[var(--color-hero)] text-white rounded-full hover:bg-[var(--color-accent-2)] transition-all duration-[var(--timing-normal)] hover:scale-105 shadow-md">
              Contact Support
            </button>
            <button className="px-6 py-3 border-2 border-[var(--color-hero)] text-[var(--color-hero)] rounded-full hover:bg-[var(--color-hero)] hover:text-white transition-all duration-[var(--timing-normal)] hover:scale-105">
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
