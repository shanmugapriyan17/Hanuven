import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export function CartModal() {
    const items = useCartStore((state) => state.items);
    const isOpen = useCartStore((state) => state.isOpen);
    const closeCart = useCartStore((state) => state.closeCart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const getTotalItems = useCartStore((state) => state.getTotalItems);
    const getTotalPrice = useCartStore((state) => state.getTotalPrice);

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <>
                    {/* Backdrop - dark overlay */}
                    <motion.div
                        key="cart-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeCart}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 9998,
                        }}
                    />

                    {/* Cart Panel - slides from right */}
                    <motion.div
                        key="cart-panel"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            height: '100vh',
                            width: '100%',
                            maxWidth: '400px',
                            backgroundColor: 'white',
                            boxShadow: '-10px 0 30px rgba(0,0,0,0.15)',
                            zIndex: 9999,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '24px',
                            borderBottom: '1px solid #e5e5e5',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <ShoppingBag style={{ width: '24px', height: '24px', color: '#14746f' }} />
                                <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>Your Cart</h2>
                                <span style={{
                                    padding: '4px 10px',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    borderRadius: '20px',
                                    backgroundColor: '#14746f',
                                    color: 'white',
                                }}>
                                    {getTotalItems()} items
                                </span>
                            </div>
                            <button
                                onClick={closeCart}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <X style={{ width: '20px', height: '20px' }} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div style={{
                            flex: 1,
                            overflowY: 'auto',
                            padding: '24px',
                        }}>
                            {items.length === 0 ? (
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                    textAlign: 'center',
                                }}>
                                    <ShoppingBag style={{ width: '64px', height: '64px', color: '#d1d5db', marginBottom: '16px' }} />
                                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#6b7280', marginBottom: '8px' }}>
                                        Your cart is empty
                                    </h3>
                                    <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '24px' }}>
                                        Add some products to get started!
                                    </p>
                                    <button
                                        onClick={closeCart}
                                        style={{
                                            padding: '12px 24px',
                                            borderRadius: '50px',
                                            border: 'none',
                                            background: 'linear-gradient(135deg, #14746f, #1a9690)',
                                            color: 'white',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {items.map((item) => (
                                        <div
                                            key={item.id}
                                            style={{
                                                display: 'flex',
                                                gap: '16px',
                                                padding: '16px',
                                                backgroundColor: '#f9fafb',
                                                borderRadius: '12px',
                                            }}
                                        >
                                            {/* Product Image */}
                                            <div style={{
                                                width: '80px',
                                                height: '80px',
                                                borderRadius: '8px',
                                                overflow: 'hidden',
                                                backgroundColor: 'white',
                                                flexShrink: 0,
                                            }}>
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                                />
                                            </div>

                                            {/* Product Info */}
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <h4 style={{
                                                    fontWeight: '600',
                                                    color: '#111827',
                                                    margin: '0 0 4px 0',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap',
                                                }}>
                                                    {item.name}
                                                </h4>
                                                {item.subtitle && (
                                                    <p style={{ fontSize: '14px', color: '#c9a961', margin: '0 0 4px 0' }}>
                                                        {item.subtitle}
                                                    </p>
                                                )}
                                                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#14746f', margin: '8px 0 0 0' }}>
                                                    ₹{item.price}
                                                </p>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-end',
                                                justifyContent: 'space-between',
                                            }}>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    style={{
                                                        border: 'none',
                                                        background: 'none',
                                                        color: '#9ca3af',
                                                        cursor: 'pointer',
                                                        padding: '4px',
                                                    }}
                                                >
                                                    <Trash2 style={{ width: '16px', height: '16px' }} />
                                                </button>

                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    backgroundColor: 'white',
                                                    borderRadius: '50px',
                                                    padding: '4px 8px',
                                                    border: '1px solid #e5e7eb',
                                                }}>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        style={{
                                                            width: '24px',
                                                            height: '24px',
                                                            borderRadius: '50%',
                                                            border: 'none',
                                                            background: 'none',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}
                                                    >
                                                        <Minus style={{ width: '12px', height: '12px' }} />
                                                    </button>
                                                    <span style={{ width: '24px', textAlign: 'center', fontWeight: '600', fontSize: '14px' }}>
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        style={{
                                                            width: '24px',
                                                            height: '24px',
                                                            borderRadius: '50%',
                                                            border: 'none',
                                                            background: 'none',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}
                                                    >
                                                        <Plus style={{ width: '12px', height: '12px' }} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer - Checkout */}
                        {items.length > 0 && (
                            <div style={{
                                borderTop: '1px solid #e5e5e5',
                                padding: '24px',
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '8px',
                                }}>
                                    <span style={{ color: '#6b7280' }}>Subtotal</span>
                                    <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#14746f' }}>
                                        ₹{getTotalPrice()}
                                    </span>
                                </div>
                                <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '16px' }}>
                                    Shipping calculated at checkout
                                </p>
                                <button
                                    style={{
                                        width: '100%',
                                        padding: '16px',
                                        borderRadius: '50px',
                                        border: 'none',
                                        background: 'linear-gradient(135deg, #14746f, #1a9690)',
                                        color: 'white',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        marginBottom: '12px',
                                    }}
                                >
                                    Proceed to Checkout
                                </button>
                                <button
                                    onClick={closeCart}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: '50px',
                                        border: 'none',
                                        background: 'none',
                                        color: '#6b7280',
                                        fontWeight: '500',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
