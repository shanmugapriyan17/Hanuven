import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { BookOpen, Beaker, Leaf, Heart, Award } from "lucide-react";

const features = [
  { title: "Traditional Wisdom", description: "Formulations from ancient Siddha texts", icon: BookOpen },
  { title: "Modern Technology", description: "GMP-certified manufacturing", icon: Beaker },
  { title: "Pure Ingredients", description: "100% natural, no synthetic additives", icon: Leaf },
  { title: "Holistic Approach", description: "Treats root causes for lasting results", icon: Heart },
];

export function SiddhaPower() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="siddha-power" className="py-20 bg-[var(--color-neutral-900)] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-2 bg-[var(--color-accent-1)]/20 text-[var(--color-accent-1)] rounded-full text-sm uppercase tracking-wider">
              Ancient Wisdom
            </span>
            <h2 className="text-white">
              The Power of Siddha Medicine
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)]"></div>

            <p className="text-gray-300 text-lg leading-relaxed">
              Siddha medicine is one of the oldest holistic healing systems in the world,
              originating over <strong>5,000 years ago</strong> in ancient Tamil Nadu, India.
              Developed by enlightened sages called "Siddhars," this sacred science views
              health as a perfect harmony between body, mind, and spirit.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Unlike modern medicine that treats symptoms, Siddha addresses the root cause
              of ailments through natural herbs, minerals, and spiritual practices. Each
              formulation is a time-tested treasure, passed down through 96 sacred texts
              and perfected over millennia.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent-1)]/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-[var(--color-accent-1)]" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Holistic Approach</h4>
                  <p className="text-gray-400 text-sm">Treats the whole person, not just symptoms, restoring natural balance</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent-1)]/20 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-[var(--color-accent-1)]" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Pure & Natural</h4>
                  <p className="text-gray-400 text-sm">Zero synthetic chemicals, only nature's most powerful healing elements</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Hero Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                src="/src/assests/video/olai chuvadi.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm italic">
                  "When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need."
                  <br />— Ancient Siddha Proverb
                </p>
              </div>
            </div>

            {/* Features Grid - Matching the image */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundColor: '#36302B',
                      border: '1px solid #4a4540'
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: '#534935' }}
                    >
                      <Icon className="w-6 h-6" style={{ color: '#C9A961' }} />
                    </div>
                    <h4 className="font-semibold mb-2 text-white">{feature.title}</h4>
                    <p className="text-sm" style={{ color: '#99A1AF' }}>{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
