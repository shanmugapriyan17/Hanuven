import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        title: "Hanuven Healthcare Receives Funding from Startup Punjab",
        excerpt: "Hanuven Healthcare Products Private Limited has been granted ₹3 lakhs in funding support from Startup Punjab, marking a significant milestone in our journey to revolutionize healthcare solutions.",
        author: "Hanuven Team",
        date: "March 15, 2024",
        category: "Funding",
        image: "https://images.unsplash.com/photo-1736748580995-1d5faa88ce4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwaGVhbGluZyUyMHBsYW50c3xlbnwxfHx8fDE3NjY4NDIxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: 2,
        title: "Securing Seed Funding for R&D Expansion",
        excerpt: "We are excited to announce receiving seed funding from the \"Startup India Seed Fund Scheme (SISFS)\", enabling us to expand our research and development capabilities.",
        author: "Hanuven Team",
        date: "February 28, 2024",
        category: "Investment",
        image: "https://images.unsplash.com/photo-1705083649602-03c5fbae2e89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkaWMlMjBoZXJicyUyMGhlYWxpbmd8ZW58MXx8fHwxNzY2OTIyMjEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: 3,
        title: "Top Honors at Startup Himachal Hackathon",
        excerpt: "Hanuven Healthcare Products Private Limited has been named the first-place winner at the prestigious Startup Himachal Hackathon, showcasing our innovative solutions.",
        author: "Hanuven Team",
        date: "January 20, 2024",
        category: "Achievement",
        image: "https://images.unsplash.com/photo-1759064716219-ba8c60a7ce07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjBpbmdyZWRpZW50cyUyMHNwaWNlc3xlbnwxfHx8fDE3NjY5MjIyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
];

export function Blog() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="blog" className="py-20 bg-[var(--color-neutral-50)]" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-2 bg-[var(--color-accent-1)]/20 text-[var(--color-hero)] rounded-full text-sm uppercase tracking-wider mb-4">
                        Latest News
                    </span>
                    <h2 className="text-[var(--color-neutral-900)] mb-4">
                        Wellness Wisdom & Updates
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Stay informed with the latest insights, tips, and news from the world of
                        Siddha medicine and holistic wellness
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group cursor-pointer"
                        >
                            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-[var(--timing-slow)] h-full flex flex-col">
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden bg-[var(--color-neutral-100)]">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[var(--timing-luxurious)]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--timing-normal)]"></div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-[var(--color-hero)] text-white text-xs rounded-full shadow-lg">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    {/* Meta Info */}
                                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-4 h-4" />
                                            <span>{post.author}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="mb-3 group-hover:text-[var(--color-hero)] transition-colors flex-1">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    {/* Read More Link */}
                                    <button className="inline-flex items-center gap-2 text-[var(--color-hero)] hover:gap-4 transition-all duration-[var(--timing-normal)] text-sm group/btn">
                                        <span>Read Article</span>
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <motion.div
                    className="mt-16 bg-gradient-to-br from-[var(--color-hero)] to-[var(--color-accent-2)] rounded-3xl p-8 md:p-12 text-center text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-white mb-4">
                            Get Wellness Tips Delivered to Your Inbox
                        </h3>
                        <p className="text-white/90 mb-6">
                            Join 5,000+ subscribers receiving weekly insights on Siddha medicine,
                            natural healing, and holistic living.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
                            />
                            <button className="px-8 py-4 bg-white text-[var(--color-hero)] rounded-full hover:bg-[var(--color-neutral-100)] transition-all duration-[var(--timing-normal)] hover:scale-105 whitespace-nowrap shadow-lg">
                                Subscribe Now
                            </button>
                        </div>
                        <p className="text-xs text-white/70 mt-4">
                            ✓ No spam, ever. Unsubscribe anytime.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
