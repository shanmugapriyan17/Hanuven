import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Slide {
  title: string;
  subtitle?: string;
  productName?: string;
  productType?: string;
  tagline?: string;
  bullets?: string[];
  cta: string;
  ctaLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "Transforming Hair & Skin with the Power of Siddha Medicine",
    bullets: [
      "Boost Hair Growth & Thickness",
      "Control Hair Fall & Damage",
      "Achieve Naturally Radiant Skin",
    ],
    cta: "Explore Products",
    ctaLink: "#products",
    image: "/src/assests/hero section 1 image.png",
  },
  {
    title: "Strengthen, Restore, Regrow",
    subtitle: "Siddha Power for Naturally Healthy Hair",
    productName: "PERCHINS",
    productType: "HAIR NOURISHING OIL",
    tagline: "Transform Your Locks from Weak to Wow",
    cta: "REGAIN YOUR GLORY",
    ctaLink: "#products",
    image: "/src/assests/hero section 2 image.png",
  },
  {
    title: "HAIR PROBLEMS?",
    subtitle: "100% Natural Siddha Formula for Healthy & Beautiful Hair",
    productName: "HAIR NOURISHING OIL",
    bullets: [
      "Promotes Thick & Shiny Hair",
      "Reduces Hair Fall & Dandruff",
      "Strengthens Hair from Roots",
    ],
    cta: "NOURISH YOUR HAIR",
    ctaLink: "#products",
    image: "/src/assests/hero section 3 image.png",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 }),
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative h-[85vh] md:h-[90vh] overflow-hidden bg-[var(--color-neutral-900)]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.5 } }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 5%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/70 via-black/40 md:via-black/25 to-black/20 md:to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-xl text-white">
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold mb-3"
                style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
              >
                {slide.title}
              </motion.h1>

              {/* Subtitle */}
              {slide.subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-sm md:text-base font-medium mb-6"
                  style={{ color: '#c9a961' }}
                >
                  {slide.subtitle}
                </motion.p>
              )}

              {/* Product Name */}
              {slide.productName && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="mb-4"
                >
                  <div className="w-16 h-1 mb-4" style={{ background: 'linear-gradient(90deg, #c9a961, #e8d5a3)' }} />
                  <h2
                    className="text-4xl md:text-5xl lg:text-6xl font-black tracking-wider mb-2"
                    style={{ color: '#c9a961', textShadow: '2px 2px 8px rgba(0,0,0,0.4)', letterSpacing: '0.1em' }}
                  >
                    {slide.productName}
                  </h2>
                  {slide.productType && (
                    <p className="text-base md:text-lg uppercase tracking-[0.3em] font-semibold" style={{ color: 'rgba(255,255,255,0.85)' }}>
                      {slide.productType}
                    </p>
                  )}
                </motion.div>
              )}

              {/* Tagline */}
              {slide.tagline && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-sm md:text-base text-gray-200 italic mb-6 border-l-2 pl-4"
                  style={{ borderColor: '#c9a961' }}
                >
                  "{slide.tagline}"
                </motion.p>
              )}

              {/* Bullets */}
              {slide.bullets && (
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="space-y-2 md:space-y-3 mb-6"
                >
                  {slide.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm md:text-base text-gray-100">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#c9a961' }} />
                      {bullet}
                    </li>
                  ))}
                </motion.ul>
              )}

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <a
                  href={slide.ctaLink}
                  className="group relative inline-block px-8 py-4 text-sm md:text-base font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl uppercase tracking-widest"
                  style={{
                    background: 'linear-gradient(135deg, #c9a961 0%, #e8d5a3 50%, #c9a961 100%)',
                    color: '#1a1a1a',
                    boxShadow: '0 4px 15px rgba(201, 169, 97, 0.4)'
                  }}
                >
                  <span className="relative z-10">{slide.cta}</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-12 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
