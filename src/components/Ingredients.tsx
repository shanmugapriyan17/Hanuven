import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Sparkles, Leaf, FlaskConical, Recycle, Volume2, VolumeX } from "lucide-react";

export function Ingredients() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="ingredients" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--color-accent-1)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--color-hero)]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-[var(--color-accent-1)]/20 text-[var(--color-hero)] rounded-full text-sm uppercase tracking-wider mb-4">
            Sacred Ingredients
          </span>
          <h2 className="text-[var(--color-neutral-900)] mb-4">
            Nature's Most Powerful Healers
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Each ingredient is carefully sourced from organic farms, hand-selected for
            purity, and tested for potency to ensure maximum healing benefits
          </p>
        </motion.div>

        {/* Hero Video */}
        <motion.div
          className="mb-16 rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-[400px]">
            <video
              ref={videoRef}
              src="/images/video/part1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
              }}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </button>

            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-[var(--color-accent-1)]" />
                <span className="text-sm uppercase tracking-wider">Traditional Craftsmanship</span>
              </div>
              <h3 className="text-white">Ancient Methods, Modern Purity</h3>
            </div>
          </div>
        </motion.div>

        {/* Bottom Info Cards - With Icons instead of Emojis */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-[var(--color-hero)]/5 rounded-xl p-6 text-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#14746f' }}
            >
              <Leaf className="w-7 h-7 text-white" />
            </div>
            <h4 className="mb-2">Certified Organic</h4>
            <p className="text-sm text-gray-600">Grown without pesticides or chemicals</p>
          </div>
          <div className="bg-[var(--color-accent-1)]/10 rounded-xl p-6 text-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#c9a961' }}
            >
              <FlaskConical className="w-7 h-7 text-white" />
            </div>
            <h4 className="mb-2">Lab Tested</h4>
            <p className="text-sm text-gray-600">Third-party verified for purity & potency</p>
          </div>
          <div className="bg-[var(--color-accent-2)]/10 rounded-xl p-6 text-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#14746f' }}
            >
              <Recycle className="w-7 h-7 text-white" />
            </div>
            <h4 className="mb-2">Sustainably Sourced</h4>
            <p className="text-sm text-gray-600">Ethical partnerships with local farmers</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
