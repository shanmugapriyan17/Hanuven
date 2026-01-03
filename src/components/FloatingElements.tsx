import { useState, useEffect } from 'react';
import { ArrowUp, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_NUMBER = '+917973216054';
const WHATSAPP_MESSAGE = 'Hello! I am interested in Hanuven products.';

export function FloatingElements() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [showWhatsApp, setShowWhatsApp] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const openWhatsApp = () => {
        const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
        window.open(url, '_blank');
    };

    // Shared fixed position styles
    const fixedRight = {
        position: 'fixed' as const,
        right: isMobile ? 16 : 24,
        zIndex: 99999,
    };

    return (
        <>
            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToTop}
                        style={{
                            ...fixedRight,
                            bottom: isMobile ? 100 : 120,
                            width: isMobile ? 48 : 56,
                            height: isMobile ? 48 : 56,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #14746f 0%, #1a8a84 100%)',
                            boxShadow: '0 8px 25px rgba(20, 116, 111, 0.5), 0 4px 10px rgba(0,0,0,0.2)',
                            border: '2px solid rgba(255,255,255,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            outline: 'none',
                        }}
                        aria-label="Scroll to top"
                    >
                        <ArrowUp style={{ width: isMobile ? 20 : 24, height: isMobile ? 20 : 24, color: 'white' }} />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* WhatsApp Button */}
            <AnimatePresence>
                {showWhatsApp && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        style={{
                            ...fixedRight,
                            bottom: isMobile ? 24 : 40,
                        }}
                    >
                        <div style={{ position: 'relative' }}>
                            {/* Close button */}
                            <AnimatePresence>
                                {(isHovered || isMobile) && (
                                    <motion.button
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowWhatsApp(false);
                                        }}
                                        style={{
                                            position: 'absolute',
                                            top: -8,
                                            right: -8,
                                            width: 24,
                                            height: 24,
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #c9a961 0%, #b8986a 100%)',
                                            border: '2px solid white',
                                            zIndex: 10,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            outline: 'none',
                                        }}
                                        aria-label="Close WhatsApp"
                                    >
                                        <X style={{ width: 12, height: 12, color: 'white' }} />
                                    </motion.button>
                                )}
                            </AnimatePresence>

                            {/* WhatsApp Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={openWhatsApp}
                                style={{
                                    width: isMobile ? 56 : 64,
                                    height: isMobile ? 56 : 64,
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                                    boxShadow: '0 8px 25px rgba(37, 211, 102, 0.5), 0 4px 10px rgba(0,0,0,0.2)',
                                    border: '3px solid rgba(255,255,255,0.4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    outline: 'none',
                                }}
                                aria-label="Chat on WhatsApp"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    style={{ width: isMobile ? 28 : 32, height: isMobile ? 28 : 32 }}
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </motion.button>

                            {/* Tooltip - Desktop only */}
                            <AnimatePresence>
                                {isHovered && !isMobile && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 10, scale: 0.9 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: 10, scale: 0.9 }}
                                        style={{
                                            position: 'absolute',
                                            right: 80,
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            whiteSpace: 'nowrap',
                                            pointerEvents: 'none',
                                            background: 'linear-gradient(135deg, #c9a961 0%, #b8986a 100%)',
                                            color: 'white',
                                            padding: '10px 16px',
                                            borderRadius: 12,
                                            boxShadow: '0 4px 15px rgba(201, 169, 97, 0.4)',
                                            fontSize: 14,
                                            fontWeight: 600,
                                        }}
                                    >
                                        Chat with us on WhatsApp!
                                        <div
                                            style={{
                                                position: 'absolute',
                                                right: -6,
                                                top: '50%',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                width: 12,
                                                height: 12,
                                                background: '#b8986a',
                                            }}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
