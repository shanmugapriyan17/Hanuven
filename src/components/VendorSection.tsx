import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { TrendingUp, Megaphone, MapPin, ArrowRight } from "lucide-react";

const benefits = [
    {
        icon: TrendingUp,
        label: "High Profit Margins",
    },
    {
        icon: Megaphone,
        label: "Marketing Support",
    },
    {
        icon: MapPin,
        label: "Exclusive Territories",
    },
];

export function VendorSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="vendor" className="relative" ref={ref}>
            {/* Full Width Container */}
            <div className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/images/vendor_partnership.png"
                        alt="Vendor Partnership"
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex items-center h-full">
                        <div className="max-w-xl py-16">
                            {/* Badge */}
                            <motion.span
                                className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm uppercase tracking-wider mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                Partnership Opportunity
                            </motion.span>

                            {/* Heading */}
                            <motion.h2
                                className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                Become a Hanuven Vendor
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                className="text-white/90 text-lg mb-8 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Join India's fastest-growing Siddha healthcare distribution network.
                                Partner with us for exclusive territories and premium margins.
                            </motion.p>

                            {/* Benefits */}
                            <motion.div
                                className="flex flex-wrap gap-3 mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                {benefits.map((benefit, index) => {
                                    const Icon = benefit.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                                        >
                                            <Icon className="w-4 h-4 text-[#c9a961]" />
                                            <span className="text-sm font-medium text-white">
                                                {benefit.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </motion.div>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <button
                                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                                    style={{ background: 'linear-gradient(135deg, #c9a961, #b8986a)' }}
                                >
                                    <span className="text-[#1a1a1a]">Learn More & Apply</span>
                                    <ArrowRight className="w-5 h-5 text-[#1a1a1a] group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
