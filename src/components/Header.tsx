import { ShoppingCart, Menu, Search, X, Settings, LogIn, UserPlus } from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useCartStore } from "../store/cartStore";

// Searchable content data
const searchableContent = [
  { title: "Products", href: "#products", category: "Section", keywords: ["products", "shop", "buy", "hair", "skin", "oil", "medicine"] },
  { title: "About Siddha", href: "#siddha-power", category: "Section", keywords: ["siddha", "about", "ancient", "wisdom", "healing", "power"] },
  { title: "Ingredients", href: "#ingredients", category: "Section", keywords: ["ingredients", "natural", "herbs", "ayurveda", "organic"] },
  { title: "Testimonials", href: "#testimonials", category: "Section", keywords: ["testimonials", "reviews", "customers", "feedback"] },
  { title: "Journal", href: "#journal", category: "Section", keywords: ["journal", "articles", "news", "updates"] },
  { title: "Blog", href: "#blog", category: "Section", keywords: ["blog", "posts", "stories", "tips"] },
  { title: "Hair Growth & Thickness", href: "#products", category: "Benefit", keywords: ["hair", "growth", "thickness", "boost"] },
  { title: "Control Hair Fall", href: "#products", category: "Benefit", keywords: ["hair", "fall", "damage", "control"] },
  { title: "Radiant Skin", href: "#products", category: "Benefit", keywords: ["skin", "radiant", "glow", "natural"] },
  { title: "Cart", href: "#cart", category: "Action", keywords: ["cart", "checkout", "buy", "order"] },
  { title: "Login", href: "#login", category: "Action", keywords: ["login", "signin", "account"] },
  { title: "Sign Up", href: "#signup", category: "Action", keywords: ["signup", "register", "create", "account"] },
];

/**
 * Header Component
 * Features: Logo, Navigation, Inline Search Bar with site-wide search, Settings dropdown
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isLoginHovered, setIsLoginHovered] = useState(false);

  const { openCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  const settingsRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
      // Close search if clicking outside both search refs
      const clickedInsideDesktopSearch = searchRef.current?.contains(event.target as Node);
      const clickedInsideMobileSearch = mobileSearchRef.current?.contains(event.target as Node);
      if (!clickedInsideDesktopSearch && !clickedInsideMobileSearch) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search results filtering
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return searchableContent.filter(
      item =>
        item.title.toLowerCase().includes(query) ||
        item.keywords.some(keyword => keyword.includes(query))
    ).slice(0, 6);
  }, [searchQuery]);

  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "About Siddha", href: "#siddha-power" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Journal", href: "#journal" },
    { label: "Blog", href: "#blog" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      const href = searchResults[0].href;
      const elementId = href.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      window.location.hash = elementId;
      setSearchQuery("");
      setIsSearchFocused(false);
      setIsMenuOpen(false);
    }
  };

  const handleResultClick = (href: string) => {
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    window.location.hash = elementId;
    setSearchQuery("");
    setIsSearchFocused(false);
    setIsMenuOpen(false);
  };

  // Common search input styles
  const searchInputStyles = {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    WebkitAppearance: 'none' as const,
    MozAppearance: 'none' as const,
    appearance: 'none' as const,
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-[#E5E1DC] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-4 group flex-shrink-0">
            <img
              src="/src/assests/logo website.png"
              alt="Hanuven Logo"
              className="w-14 h-14 rounded-full object-cover transform group-hover:scale-105 transition-transform duration-[var(--timing-normal)] shadow-md"
            />
            <span className="text-3xl font-bold tracking-tight text-[var(--color-hero)]">
              Hanuven
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--color-neutral-900)] hover:text-[var(--color-hero)] transition-colors duration-[var(--timing-normal)] relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-hero)] group-hover:w-full transition-all duration-[var(--timing-normal)]"></span>
              </a>
            ))}
          </nav>

          {/* Actions - Search Bar + Settings */}
          <div className="flex items-center gap-3">

            {/* Desktop Search Bar */}
            <div ref={searchRef} className="hidden lg:block relative mx-4">
              <form onSubmit={handleSearch} className="flex items-center">
                <div
                  className="flex items-center gap-4 rounded-xl px-4 py-3 min-w-[220px] xl:min-w-[300px]"
                  style={{ backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
                >
                  <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    placeholder="Search store"
                    className="text-sm w-full placeholder:text-gray-400"
                    style={{ ...searchInputStyles, color: '#000000', caretColor: '#000000' }}
                  />
                </div>
              </form>

              {/* Desktop Search Results Dropdown */}
              <AnimatePresence>
                {isSearchFocused && searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden z-50"
                  >
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick(result.href)}
                        className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                      >
                        <span className="text-sm text-gray-800">{result.title}</span>
                        <span className="text-xs text-gray-400">{result.category}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Cart Button */}
            <button
              onClick={openCart}
              onMouseEnter={() => setIsCartHovered(true)}
              onMouseLeave={() => setIsCartHovered(false)}
              className="relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
              aria-label="Cart"
            >
              <ShoppingCart
                className="w-5 h-5 transition-colors duration-300"
                style={{ color: isCartHovered ? '#c9a961' : '#1a1a1a' }}
              />
              {totalItems > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center text-white"
                  style={{ backgroundColor: '#14746f' }}
                >
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </button>

            {/* Login Button - Desktop only */}
            <button
              onMouseEnter={() => setIsLoginHovered(true)}
              onMouseLeave={() => setIsLoginHovered(false)}
              className="hidden lg:flex w-10 h-10 items-center justify-center rounded-full transition-colors cursor-pointer"
              aria-label="Login"
            >
              <LogIn
                className="w-5 h-5 transition-colors duration-300"
                style={{ color: isLoginHovered ? '#c9a961' : '#1a1a1a' }}
              />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
            className="lg:hidden border-t border-[#E5E1DC] bg-white"
          >
            <nav className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div ref={mobileSearchRef} className="relative mb-4">
                <form onSubmit={handleSearch}>
                  <div
                    className="flex items-center gap-4 rounded-lg px-4 py-3"
                    style={{ backgroundColor: '#f5f5f5' }}
                  >
                    <Search className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsSearchFocused(true)}
                      placeholder="Search store"
                      className="text-base w-full font-normal placeholder:text-gray-400"
                      style={{
                        ...searchInputStyles,
                        color: '#1a1a1a',
                        caretColor: '#1a1a1a',
                        fontSize: '16px',
                        lineHeight: '1.5',
                      }}
                    />
                  </div>
                </form>

                {/* Mobile Search Results */}
                <AnimatePresence>
                  {isSearchFocused && searchResults.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-50 border border-gray-100"
                    >
                      {searchResults.map((result, index) => (
                        <button
                          key={index}
                          onClick={() => handleResultClick(result.href)}
                          className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors text-left border-b border-gray-50 last:border-0"
                        >
                          <span className="text-sm text-gray-800 font-medium">{result.title}</span>
                          <span className="text-xs text-gray-400">{result.category}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block text-lg text-[var(--color-neutral-900)] hover:text-[var(--color-hero)] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Divider */}
              <div className="border-t border-gray-200 my-4"></div>

              {/* Mobile Login Button */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 text-lg py-3 px-6 w-full rounded-full font-semibold"
                style={{
                  backgroundColor: '#14746f',
                  color: 'white',
                }}
              >
                <LogIn className="w-5 h-5" />
                <span>Login</span>
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

