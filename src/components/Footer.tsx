import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showTamil, setShowTamil] = useState(false);

  return (
    <footer className="bg-[var(--color-neutral-900)] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-4 group flex-shrink-0 mb-4">
              <img
                src="/images/logo website.png"
                alt="Hanuven Logo"
                className="w-14 h-14 rounded-full object-cover transform group-hover:scale-105 transition-transform duration-[var(--timing-normal)] shadow-md"
              />
              <span className="text-3xl font-bold tracking-tight text-[var(--color-hero)]">
                Hanuven
              </span>
            </a>

            {/* Toggleable Tamil/English Quote */}
            <p
              onClick={() => setShowTamil(!showTamil)}
              className="text-lg mb-6 border-l-2 border-[#c9a961] pl-4 cursor-pointer hover:opacity-80 transition-all leading-relaxed"
              style={{ color: '#c9a961' }}
              title="Click to toggle language"
            >
              {showTamil
                ? "உற்றான் அளவும் பிணியளவும் காலமும்\nகற்றான் கருதிச் செயல்"
                : "A learned physician treats considering the patient's strength, disease severity, and timing."
              }
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://www.facebook.com/profile.php?id=61573423904801"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-accent-1)] flex items-center justify-center transition-all duration-[var(--timing-normal)] group cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/hanuven/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-accent-1)] flex items-center justify-center transition-all duration-[var(--timing-normal)] group cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://x.com/hanuven"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-accent-1)] flex items-center justify-center transition-all duration-[var(--timing-normal)] group cursor-pointer"
                aria-label="Twitter/X"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/@hanvenhealthcareproducts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-accent-1)] flex items-center justify-center transition-all duration-[var(--timing-normal)] group cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://in.pinterest.com/hanuvenheal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-accent-1)] flex items-center justify-center transition-all duration-[var(--timing-normal)] group cursor-pointer"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:support@hanuven.in"
                className="flex items-center gap-3 text-gray-400 hover:text-[var(--color-accent-1)] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>support@hanuven.in</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>NEW NO 2 OLD NO 33, GIRI STREET, WESTMAMBALAM, CHENNAI, Tamil Nadu, India - 600033</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-gray-400 hover:text-[var(--color-accent-1)] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#siddha-power" className="text-gray-400 hover:text-[var(--color-accent-1)] transition-colors">
                  About Siddha
                </a>
              </li>
              <li>
                <a href="#ingredients" className="text-gray-400 hover:text-[var(--color-accent-1)] transition-colors">
                  Ingredients
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-[var(--color-accent-1)] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#journal" className="text-gray-400 hover:text-[var(--color-accent-1)] transition-colors">
                  Journal
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-[var(--color-accent-1)] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[var(--color-accent-1)] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[var(--color-accent-1)] transition-colors">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[var(--color-accent-1)] transition-colors">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[var(--color-accent-1)] transition-colors">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[var(--color-accent-1)] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[var(--color-accent-1)] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[var(--color-accent-1)] transition-colors">
                  Wellness Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[var(--color-accent-1)] transition-colors">
                  Dosha Quiz
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[var(--color-accent-1)] transition-colors">
                  Research & Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[var(--color-accent-1)] transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[var(--color-accent-1)] transition-colors">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[var(--color-accent-1)] transition-colors">
                  Become a Partner
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-white mb-3">Stay Connected</h4>
            <p className="text-gray-400 mb-6">
              Subscribe to receive exclusive offers, wellness tips, and Siddha wisdom
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)] transition-all"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white rounded-full hover:scale-105 transition-all duration-[var(--timing-normal)] whitespace-nowrap shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} Hanuven.in - All rights reserved.
            </p>

            {/* Manufacturing License */}
            <p className="text-xs" style={{ color: '#c9a961' }}>
              Siddha Proprietary Medicine | Mfg. Lic. No: 285A/25-E
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm">Secure payments via</span>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 bg-white/10 rounded text-xs text-gray-300">Visa</div>
                <div className="px-3 py-1 bg-white/10 rounded text-xs text-gray-300">UPI</div>
                <div className="px-3 py-1 bg-white/10 rounded text-xs text-gray-300">PayPal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
