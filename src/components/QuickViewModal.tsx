import { motion, AnimatePresence } from 'motion/react';
import { X, Star, ShoppingBag, Minus, Plus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCartStore } from '../store/cartStore';

export interface QuickViewProduct {
    id: number;
    name: string;
    subtitle: string;
    size: string;
    shortDescription: string;
    detailedDescription: string;
    benefits: string[];
    price: number;
    originalPrice: number;
    rating: number;
    reviews: number;
    image: string;
}

interface QuickViewModalProps {
    product: QuickViewProduct | null;
    isOpen: boolean;
    onClose: () => void;
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
    const [isMobile, setIsMobile] = useState(false);

    const items = useCartStore((state) => state.items);
    const addToCart = useCartStore((state) => state.addToCart);
    const updateQuantity = useCartStore((state) => state.updateQuantity);

    // Check for mobile screen size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!product) return null;

    const cartItem = items.find(item => item.id === product.id);
    const quantityInCart = cartItem?.quantity || 0;

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            subtitle: product.subtitle,
            size: product.size,
            price: product.price,
            image: product.image,
        });
    };

    const handleIncrement = () => {
        if (cartItem) {
            updateQuantity(product.id, quantityInCart + 1);
        } else {
            handleAddToCart();
        }
    };

    const handleDecrement = () => {
        if (quantityInCart > 0) {
            updateQuantity(product.id, quantityInCart - 1);
        }
    };

    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="quickview-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            zIndex: 9998,
                        }}
                    />

                    {/* Modal Container */}
                    <motion.div
                        key="quickview-modal"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: isMobile ? '10px' : '20px',
                            zIndex: 9999,
                            pointerEvents: 'none',
                        }}
                    >
                        {/* Modal Content */}
                        <div
                            style={{
                                width: '100%',
                                maxWidth: isMobile ? '100%' : '900px',
                                maxHeight: isMobile ? '95vh' : '90vh',
                                backgroundColor: 'white',
                                borderRadius: isMobile ? '16px' : '24px',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                pointerEvents: 'auto',
                                position: 'relative',
                            }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                style={{
                                    position: 'absolute',
                                    top: '12px',
                                    right: '12px',
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    border: 'none',
                                    backgroundColor: 'rgba(255,255,255,0.9)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 10,
                                    transition: 'all 0.2s',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                }}
                            >
                                <X style={{ width: '18px', height: '18px', color: '#666' }} />
                            </button>

                            {/* Scrollable Content Container */}
                            <div style={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                overflowY: 'auto',
                                flex: 1,
                            }}>
                                {/* Product Image Section */}
                                <div style={{
                                    flex: isMobile ? 'none' : '0 0 45%',
                                    backgroundColor: '#f8f6f4',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: isMobile ? '24px' : '40px',
                                    minHeight: isMobile ? '200px' : '400px',
                                }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: isMobile ? '180px' : '350px',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </div>

                                {/* Product Details Section */}
                                <div style={{
                                    flex: '1',
                                    padding: isMobile ? '20px' : '40px',
                                    overflowY: 'auto',
                                }}>
                                    {/* Badge */}
                                    <span style={{
                                        display: 'inline-block',
                                        padding: '4px 12px',
                                        backgroundColor: '#14746f',
                                        color: 'white',
                                        fontSize: '11px',
                                        fontWeight: '600',
                                        borderRadius: '20px',
                                        marginBottom: '12px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                    }}>
                                        Siddha Formula
                                    </span>

                                    {/* Product Name */}
                                    <h2 style={{
                                        fontSize: isMobile ? '22px' : '28px',
                                        fontWeight: 'bold',
                                        color: '#1a1a1a',
                                        margin: '0 0 4px 0',
                                    }}>
                                        {product.name}
                                    </h2>

                                    {/* Subtitle */}
                                    <p style={{
                                        fontSize: isMobile ? '14px' : '16px',
                                        color: '#c9a961',
                                        fontWeight: '500',
                                        margin: '0 0 10px 0',
                                    }}>
                                        {product.subtitle} ({product.size})
                                    </p>

                                    {/* Rating */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        marginBottom: '12px',
                                    }}>
                                        <div style={{ display: 'flex', gap: '2px' }}>
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    style={{
                                                        width: '14px',
                                                        height: '14px',
                                                        fill: i < Math.floor(product.rating) ? '#fbbf24' : '#e5e7eb',
                                                        color: i < Math.floor(product.rating) ? '#fbbf24' : '#e5e7eb',
                                                    }}
                                                />
                                            ))}
                                        </div>
                                        <span style={{ fontSize: '13px', color: '#6b7280' }}>
                                            {product.rating} ({product.reviews} reviews)
                                        </span>
                                    </div>

                                    {/* Short Description */}
                                    <p style={{
                                        fontSize: isMobile ? '13px' : '15px',
                                        color: '#4b5563',
                                        lineHeight: '1.6',
                                        margin: '0 0 16px 0',
                                        padding: isMobile ? '12px' : '16px',
                                        backgroundColor: '#f9fafb',
                                        borderRadius: '10px',
                                        borderLeft: '3px solid #14746f',
                                    }}>
                                        {product.shortDescription}
                                    </p>

                                    {/* Detailed Description - Hidden on mobile for brevity */}
                                    {!isMobile && (
                                        <p style={{
                                            fontSize: '14px',
                                            color: '#6b7280',
                                            lineHeight: '1.8',
                                            margin: '0 0 20px 0',
                                        }}>
                                            {product.detailedDescription}
                                        </p>
                                    )}

                                    {/* Benefits */}
                                    <div style={{ marginBottom: isMobile ? '16px' : '24px' }}>
                                        <h4 style={{
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            color: '#1a1a1a',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                            marginBottom: '10px',
                                        }}>
                                            Key Benefits
                                        </h4>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                                            gap: isMobile ? '6px' : '10px',
                                        }}>
                                            {product.benefits.slice(0, isMobile ? 4 : 6).map((benefit, index) => (
                                                <div
                                                    key={index}
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '6px',
                                                        fontSize: isMobile ? '13px' : '14px',
                                                        color: '#374151',
                                                    }}
                                                >
                                                    <span style={{ color: '#14746f' }}>✓</span>
                                                    <span>{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Price Section */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: isMobile ? '10px' : '16px',
                                        marginBottom: isMobile ? '16px' : '24px',
                                        padding: isMobile ? '12px' : '16px',
                                        backgroundColor: '#f0fdf4',
                                        borderRadius: '10px',
                                        flexWrap: 'wrap',
                                    }}>
                                        <span style={{
                                            fontSize: isMobile ? '26px' : '32px',
                                            fontWeight: 'bold',
                                            color: '#14746f',
                                        }}>
                                            ₹{product.price}
                                        </span>
                                        <span style={{
                                            fontSize: isMobile ? '16px' : '18px',
                                            color: '#9ca3af',
                                            textDecoration: 'line-through',
                                        }}>
                                            ₹{product.originalPrice}
                                        </span>
                                        <span style={{
                                            padding: '4px 10px',
                                            backgroundColor: '#14746f',
                                            color: 'white',
                                            fontSize: '11px',
                                            fontWeight: '600',
                                            borderRadius: '20px',
                                        }}>
                                            Save {discount}%
                                        </span>
                                    </div>

                                    {/* Add to Cart / Quantity Controls */}
                                    {quantityInCart > 0 ? (
                                        /* Quantity Controls */
                                        <div
                                            style={{
                                                width: '100%',
                                                padding: '8px 16px',
                                                borderRadius: '50px',
                                                border: '2px solid #14746f',
                                                backgroundColor: '#f3f4f6',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <button
                                                onClick={handleDecrement}
                                                style={{
                                                    width: '44px',
                                                    height: '44px',
                                                    borderRadius: '50%',
                                                    border: 'none',
                                                    backgroundColor: '#14746f',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Minus style={{ width: '18px', height: '18px', color: 'white' }} />
                                            </button>
                                            <span style={{
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                                color: '#14746f',
                                            }}>
                                                {quantityInCart} in Cart
                                            </span>
                                            <button
                                                onClick={handleIncrement}
                                                style={{
                                                    width: '44px',
                                                    height: '44px',
                                                    borderRadius: '50%',
                                                    border: 'none',
                                                    backgroundColor: '#14746f',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Plus style={{ width: '18px', height: '18px', color: 'white' }} />
                                            </button>
                                        </div>
                                    ) : (
                                        /* Add to Cart Button */
                                        <button
                                            onClick={handleAddToCart}
                                            style={{
                                                width: '100%',
                                                padding: isMobile ? '14px 24px' : '16px 32px',
                                                borderRadius: '50px',
                                                border: 'none',
                                                background: 'linear-gradient(135deg, #14746f, #1a9690)',
                                                color: 'white',
                                                fontSize: isMobile ? '15px' : '16px',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '8px',
                                                transition: 'all 0.3s',
                                                boxShadow: '0 4px 15px rgba(20, 116, 111, 0.3)',
                                            }}
                                        >
                                            <ShoppingBag style={{ width: '18px', height: '18px' }} />
                                            Add to Cart
                                        </button>
                                    )}

                                    {/* Trust Indicators */}
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: isMobile ? '12px' : '24px',
                                        marginTop: '16px',
                                        fontSize: isMobile ? '11px' : '12px',
                                        color: '#9ca3af',
                                        flexWrap: 'wrap',
                                    }}>
                                        <span>✓ 100% Natural</span>
                                        <span>✓ No Side Effects</span>
                                        <span>✓ Free Shipping 500+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
