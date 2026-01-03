import { ProductCard } from "./ProductCard";
import { QuickViewModal, QuickViewProduct } from "./QuickViewModal";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

const products = [
  {
    id: 1,
    name: "HANUVAM",
    subtitle: "Skin Care Oil",
    size: "100ML",
    description: "Premium Siddha formulation for radiant, healthy skin. Nourishes deeply and restores natural glow.",
    shortDescription: "Traditional Siddha formula for psoriasis, acne, rashes, and skin irritation. Natural relief without side effects.",
    detailedDescription: "HANUVAM Skin Care Oil is a clinically-formulated Siddha medicine designed to provide lasting relief for chronic skin conditions. Crafted from ancient Tamil Nadu healing traditions, this therapeutic oil targets the root cause of skin ailments—not just symptoms.",
    benefits: [
      "Psoriasis Relief",
      "Anti-Acne Treatment",
      "Soothes Rashes & Irritation",
      "No Side Effects",
      "100% Natural Ingredients",
      "Deep Nourishment",
    ],
    price: 330,
    originalPrice: 499,
    rating: 4.9,
    reviews: 247,
    image: "/src/assests/product 1 img.png",
    badge: "NEW",
    stock: 15,
  },
  {
    id: 2,
    name: "PERCHINS",
    subtitle: "Hair Nourishing Oil",
    size: "100ML",
    description: "100% Natural Siddha formula for thick, shiny, and healthy hair. Reduces hair fall and strengthens roots.",
    shortDescription: "Complete hair care solution for dandruff, hair fall, premature greying, and dry hair. Rich Siddha formulation for healthy, strong hair.",
    detailedDescription: "PERCHINS Hair Nourishing Oil is a powerful Siddha formulation designed to address multiple hair concerns in one bottle. Rooted in 5,000 years of Tamil Nadu's traditional medicine, this oil nourishes from root to tip, promoting healthy scalp and lustrous hair naturally.",
    benefits: [
      "Anti-Dandruff Action",
      "Controls Hair Fall",
      "Prevents Premature Greying",
      "Smoothens & Strengthens",
      "100% Natural Ingredients",
      "Promotes Hair Growth",
    ],
    price: 330,
    originalPrice: 499,
    rating: 4.8,
    reviews: 312,
    image: "/src/assests/product 2 img .png",
    badge: "NEW",
    stock: 22,
  },
];

export function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [quickViewProduct, setQuickViewProduct] = useState<QuickViewProduct | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setQuickViewProduct(product);
      setIsQuickViewOpen(true);
    }
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
    setTimeout(() => setQuickViewProduct(null), 300);
  };

  return (
    <>
      <section id="products" className="py-20 bg-[var(--color-neutral-50)]" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-[var(--color-accent-1)]/20 text-[var(--color-hero)] rounded-full text-sm uppercase tracking-wider mb-4">
              Our Products
            </span>
            <h2 className="text-[var(--color-neutral-900)] mb-4">
              Crafted for Your Wellness
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Each product is a masterpiece of ancient Siddha wisdom, carefully formulated
              with premium ingredients to transform your health journey.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ProductCard
                  {...product}
                  onQuickView={() => handleQuickView(product.id)}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="px-8 py-4 border-2 border-[var(--color-hero)] text-[var(--color-hero)] rounded-full hover:bg-[var(--color-hero)] hover:text-white transition-all duration-[var(--timing-normal)] hover:scale-105">
              View All Products
            </button>
          </motion.div>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
      />
    </>
  );
}
