import { Star, ShoppingBag, Heart, Eye, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { useCartStore } from "../store/cartStore";

interface ProductCardProps {
  id: number;
  name: string;
  subtitle?: string;
  size?: string;
  description: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  stock: number;
  onQuickView?: () => void;
}

export function ProductCard({
  id,
  name,
  subtitle,
  size,
  description,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  badge,
  stock,
  onQuickView,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const items = useCartStore((state) => state.items);
  const addToCart = useCartStore((state) => state.addToCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const cartItem = items.find(item => item.id === id);
  const quantityInCart = cartItem?.quantity || 0;

  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  const handleAddToCart = () => {
    addToCart({ id, name, subtitle, size, price, image });
  };

  const handleIncrement = () => {
    if (cartItem) {
      updateQuantity(id, quantityInCart + 1);
    } else {
      addToCart({ id, name, subtitle, size, price, image });
    }
  };

  const handleDecrement = () => {
    if (quantityInCart > 0) {
      updateQuantity(id, quantityInCart - 1);
    }
  };

  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-[var(--timing-slow)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {badge && (
          <span
            className="px-3 py-1 text-white text-xs font-semibold rounded-full shadow-lg"
            style={{ background: badge === 'BESTSELLER' ? 'linear-gradient(135deg, #c9a961, #e8d5a3)' : 'linear-gradient(135deg, #14746f, #1a9690)' }}
          >
            {badge}
          </span>
        )}
        {discount > 0 && (
          <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Favorite Button */}
      <button
        onClick={() => setIsFavorited(!isFavorited)}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-[var(--timing-normal)] hover:scale-110 shadow-md"
        aria-label="Add to favorites"
      >
        <Heart
          className={`w-5 h-5 transition-all duration-[var(--timing-normal)] ${isFavorited ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
        />
      </button>

      {/* Product Image - Original aspect ratio, no stretch, no crop */}
      <div
        className="relative h-80 overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: '#f5f3f0' }}
      >
        <motion.img
          src={image}
          alt={name}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
          animate={{
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-3">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : i < rating
                    ? "fill-yellow-400/50 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                  }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">
            ({reviews})
          </span>
        </div>

        {/* Product Name & Subtitle */}
        <div>
          <h3 className="text-xl font-bold text-[var(--color-neutral-900)] group-hover:text-[var(--color-hero)] transition-colors duration-[var(--timing-normal)]">
            {name} {size && <span className="text-sm font-normal text-gray-500">({size})</span>}
          </h3>
          {subtitle && (
            <p className="text-sm font-medium" style={{ color: '#c9a961' }}>{subtitle}</p>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

        {/* Price */}
        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-2xl font-bold" style={{ color: '#14746f' }}>₹{price}</span>
          {originalPrice > price && (
            <span className="text-gray-400 line-through text-sm">₹{originalPrice}</span>
          )}
        </div>

        {/* Stock Indicator */}
        {stock < 10 && (
          <p className="text-sm text-orange-600 font-medium">
            🔥 Only {stock} left in stock!
          </p>
        )}

        {/* Buttons Row */}
        <div className="flex items-center gap-2 pt-2">
          {/* Add to Bag / Quantity Controls */}
          {quantityInCart > 0 ? (
            /* Quantity Controls */
            <div
              className="flex-1 py-2 px-3 rounded-full flex items-center justify-between"
              style={{ backgroundColor: '#f3f4f6', border: '2px solid #14746f' }}
            >
              <motion.button
                onClick={handleDecrement}
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#14746f' }}
                whileTap={{ scale: 0.9 }}
              >
                <Minus className="w-4 h-4 text-white" />
              </motion.button>
              <span className="font-bold text-lg" style={{ color: '#14746f' }}>
                {quantityInCart}
              </span>
              <motion.button
                onClick={handleIncrement}
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#14746f' }}
                whileTap={{ scale: 0.9 }}
              >
                <Plus className="w-4 h-4 text-white" />
              </motion.button>
            </div>
          ) : (
            /* Add to Bag Button */
            <motion.button
              onClick={handleAddToCart}
              className="flex-1 py-3 px-4 text-white rounded-full flex items-center justify-center gap-2 transition-all duration-[var(--timing-normal)] font-semibold text-sm"
              style={{ background: 'linear-gradient(135deg, #14746f, #1a9690)' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Bag</span>
            </motion.button>
          )}

          {/* Quick View Button - appears on hover */}
          <motion.button
            onClick={onQuickView}
            className="py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 font-semibold text-sm border-2"
            style={{
              borderColor: '#14746f',
              color: '#14746f',
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateX(0)' : 'translateX(10px)',
              pointerEvents: isHovered ? 'auto' : 'none',
            }}
            whileHover={{ backgroundColor: 'rgba(20, 116, 111, 0.1)' }}
            whileTap={{ scale: 0.98 }}
          >
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">Quick View</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
