import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Droplet, Sparkles, Heart, Star as StarIcon, Shield, Leaf, Users, CheckCircle, Lock, Truck } from "lucide-react";

const features = [
  { icon: Droplet, label: "Reduced hair fall" },
  { icon: Sparkles, label: "Improved hair regrowth" },
  { icon: Heart, label: "Scalp nourishment" },
  { icon: StarIcon, label: "Healthier skin texture" },
  { icon: Shield, label: "Authentic herbal composition" },
  { icon: Leaf, label: "Natural effectiveness" },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[var(--color-accent-1)]/10 to-[var(--color-neutral-50)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-[var(--color-accent-1)]/20 text-[var(--color-hero)] rounded-full text-sm uppercase tracking-wider mb-4">
            Customer Feedback
          </span>
          <h2 className="text-[var(--color-neutral-900)] mb-4">
            Real results from real people
          </h2>
        </motion.div>

        {/* Customer Summary */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8" style={{ textAlign: 'justify' }}>
              Over <span style={{ color: '#c9a961', fontWeight: 'bold' }}>100+</span> customers consistently share positive feedback on <strong style={{ color: '#c9a961' }}>PerChins Hair Care Oil</strong> and <strong style={{ color: '#c9a961' }}>Hanuven Skin Care Oil</strong>, highlighting visible improvements, natural effectiveness, and trust in Siddha-based formulations. Users report reduced hair fall, improved hair regrowth, scalp nourishment, and healthier skin texture with regular use. Many appreciate the authentic herbal composition, absence of harsh chemicals, and the gentle yet effective results. Customers value the products for addressing long-term concerns naturally, reflecting Hanuven's commitment to blending traditional Siddha wisdom with scientifically guided care for everyday wellness.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-gradient-to-br from-[var(--color-hero)]/5 to-[var(--color-accent-1)]/5 rounded-xl"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#14746f' }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{feature.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Trusted Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center justify-center gap-3 p-6 bg-gradient-to-r from-[var(--color-hero)] to-[var(--color-accent-1)] rounded-2xl"
            >
              <Users className="w-8 h-8 text-white" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-white/90">Trusted Customers</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
