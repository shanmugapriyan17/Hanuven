import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Droplet, Hand, Sparkles, RefreshCw, Scissors, ShowerHead } from "lucide-react";

const products = {
  hanuvam: {
    name: "HANUVAM",
    type: "Skin & Body Oil",
    steps: [
      {
        step: 1,
        icon: Droplet,
        title: "Cleanse",
        description: "Clean affected area with mild soap and warm water",
        tip: "Use lukewarm water",
      },
      {
        step: 2,
        icon: Hand,
        title: "Apply",
        description: "Apply a thin layer of oil directly to the skin",
        tip: "A little goes a long way",
      },
      {
        step: 3,
        icon: Sparkles,
        title: "Massage",
        description: "Gently massage in circular motions for absorption",
        tip: "Use fingertips, not nails",
      },
      {
        step: 4,
        icon: RefreshCw,
        title: "Repeat",
        description: "Apply twice daily, morning and night",
        tip: "Consistency is key",
      },
    ],
    proTip: "For psoriasis, use consistently for 8–12 weeks. Natural healing takes time but provides lasting relief.",
  },
  perchins: {
    name: "PERCHINS",
    type: "Hair & Scalp Oil",
    steps: [
      {
        step: 1,
        icon: Scissors,
        title: "Section",
        description: "Part hair for even application to scalp",
        tip: "Work in small sections",
      },
      {
        step: 2,
        icon: Hand,
        title: "Apply",
        description: "Apply oil directly to scalp sections",
        tip: "Focus on roots",
      },
      {
        step: 3,
        icon: Sparkles,
        title: "Massage",
        description: "Circular motions for 5-10 minutes",
        tip: "Stimulates blood flow",
      },
      {
        step: 4,
        icon: ShowerHead,
        title: "Wash",
        description: "Rinse with mild shampoo after 30 mins",
        tip: "Or leave overnight",
      },
    ],
    proTip: "Use 3x/week for 4 months for significant hair fall and dandruff reduction.",
  },
};

export function HowToUse() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProduct, setActiveProduct] = useState<"hanuvam" | "perchins">("hanuvam");

  const currentProduct = products[activeProduct];

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-neutral-100)] to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-[var(--color-accent-1)]/20 text-[var(--color-hero)] rounded-full text-sm uppercase tracking-wider mb-4">
            Simple Steps
          </span>
          <h2 className="text-[var(--color-neutral-900)] mb-4">
            Your Path to Natural Wellness
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Easy application for lasting results
          </p>
        </motion.div>

        {/* Product Toggle Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div
            className="inline-flex rounded-full p-1.5"
            style={{ backgroundColor: '#2d3a2d' }}
          >
            <button
              onClick={() => setActiveProduct("hanuvam")}
              className={`px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-300`}
              style={{
                background: activeProduct === "hanuvam"
                  ? '#3cb371'
                  : 'transparent',
                color: activeProduct === "hanuvam" ? '#1a2a1a' : '#8b9a8b',
              }}
            >
              HANUVAM
            </button>
            <button
              onClick={() => setActiveProduct("perchins")}
              className={`px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-300`}
              style={{
                background: activeProduct === "perchins"
                  ? '#3cb371'
                  : 'transparent',
                color: activeProduct === "perchins" ? '#1a2a1a' : '#8b9a8b',
              }}
            >
              PERCHINS
            </button>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div
          key={activeProduct}
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-accent-1)] via-[var(--color-hero)] to-[var(--color-accent-2)] -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {currentProduct.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-[var(--timing-slow)] group cursor-pointer border-2 border-transparent hover:border-[var(--color-accent-1)]">
                    {/* Step Number Circle */}
                    <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-[var(--timing-normal)]">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Step Number Badge */}
                    <div
                      className="absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-lg font-bold"
                      style={{ backgroundColor: '#D5BA7B', color: '#1a1a1a' }}
                    >
                      {step.step}
                    </div>

                    <h4 className="text-center mb-3 text-[var(--color-neutral-900)] font-semibold">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-center mb-4 text-sm">
                      {step.description}
                    </p>

                    {/* Tip Badge */}
                    <div className="bg-[var(--color-accent-1)]/10 rounded-lg p-3 border border-[var(--color-accent-1)]/20">
                      <p className="text-xs text-[var(--color-hero)] text-center">
                        💡 <strong>Tip:</strong> {step.tip}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Connector Arrow */}
                  {index < currentProduct.steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-1 h-8 bg-gradient-to-b from-[var(--color-hero)] to-[var(--color-accent-2)]"></div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Pro Tip Box */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-block bg-white rounded-2xl p-8 shadow-xl max-w-2xl">
            <p className="text-gray-600 mb-4">
              💡 <strong>Pro Tip:</strong> {currentProduct.proTip}
            </p>
            <button
              className="px-8 py-4 rounded-full hover:scale-105 transition-all duration-[var(--timing-normal)] shadow-lg font-semibold uppercase tracking-wide"
              style={{
                background: 'linear-gradient(135deg, #D5BA7B, #c9a961, #b8986a)',
                color: '#1a1a1a',
              }}
            >
              Shop {currentProduct.name}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
