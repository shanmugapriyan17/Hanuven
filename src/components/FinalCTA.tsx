import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles, ArrowRight, Shield, Leaf, Heart, CheckCircle, Rabbit, Flag } from "lucide-react";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-20 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #14746f 0%, #c9a961 50%, #1a1a1a 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c9a961] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-8"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Start Your Natural Healing Journey Today
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join thousands who have transformed their skin and hair with traditional
            Siddha formulations. Experience the difference that 5,000 years of wisdom can make.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-white/90">90-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-white/90">100% Natural</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-white/90">500+ Happy Customers</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button className="group px-10 py-5 bg-white text-[var(--color-hero)] rounded-full hover:bg-[var(--color-neutral-50)] transition-all duration-[var(--timing-normal)] hover:scale-105 shadow-2xl flex items-center justify-center gap-3">
              <span className="text-lg font-semibold">Shop Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border-2 border-white text-white rounded-full hover:bg-white hover:text-[var(--color-hero)] transition-all duration-[var(--timing-normal)] hover:scale-105 text-lg font-semibold">
              Learn About Siddha
            </button>
          </motion.div>

          {/* Limited Time Offer */}
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm shadow-lg"
              style={{ backgroundColor: '#c9a961' }}
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Free Shipping on Orders Above ₹500</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold mb-1">100%</div>
            <div className="text-sm text-white/80">Natural</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold mb-1">GMP</div>
            <div className="text-sm text-white/80">Certified</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
              <Rabbit className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold mb-1">Cruelty</div>
            <div className="text-sm text-white/80">Free</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
              <Flag className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold mb-1">Proudly</div>
            <div className="text-sm text-white/80">Indian</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
