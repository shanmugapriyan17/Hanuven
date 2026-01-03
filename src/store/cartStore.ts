import { create } from 'zustand';

export interface CartItem {
    id: number;
    name: string;
    subtitle?: string;
    size?: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    isOpen: boolean;

    // Actions
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
    toggleCart: () => void;
    openCart: () => void;
    closeCart: () => void;

    // Computed
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    isOpen: false,

    addToCart: (item) => {
        set((state) => {
            const existingItem = state.items.find((i) => i.id === item.id);

            if (existingItem) {
                return {
                    items: state.items.map((i) =>
                        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                    ),
                };
            }

            return {
                items: [...state.items, { ...item, quantity: 1 }],
            };
        });
    },

    removeFromCart: (id) => {
        set((state) => ({
            items: state.items.filter((item) => item.id !== id),
        }));
    },

    updateQuantity: (id, quantity) => {
        if (quantity < 1) {
            get().removeFromCart(id);
            return;
        }

        set((state) => ({
            items: state.items.map((item) =>
                item.id === id ? { ...item, quantity } : item
            ),
        }));
    },

    clearCart: () => {
        set({ items: [] });
    },

    toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }));
    },

    openCart: () => {
        set({ isOpen: true });
    },

    closeCart: () => {
        set({ isOpen: false });
    },

    getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
    },

    getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
}));
