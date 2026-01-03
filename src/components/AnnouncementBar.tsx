import { X, Leaf, Sparkles, Truck } from "lucide-react";
import { useState } from "react";

/**
 * AnnouncementBar Component
 * Displays a scrolling marquee with Thirukkural quote, shipping info, and product highlights
 * Features icon separators between content items
 */
export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  // Content items to display in the marquee
  const announcements = [
    { text: "திருக்குறள் – 611", },
    { text: "அருமை உடைய செயல் முயற்சி ஆற்றின் பெருமை உடையாம் பயன்", icon: "leaf" },
    { text: "When a task of great difficulty is pursued with sustained effort and perseverance, the result attained will be equally great and rewarding.", icon: "sparkle" },
    { text: "Free Shipping Above ₹500", icon: "truck" },
    { text: "100% Natural Siddha", icon: "leaf" },
  ];

  // Render icon based on type (optional parameter)
  const renderIcon = (iconType?: string) => {
    if (!iconType) return null;
    switch (iconType) {
      case "sparkle": return <Sparkles className="w-3 h-3" />;
      case "leaf": return <Leaf className="w-3 h-3" />;
      case "truck": return <Truck className="w-3 h-3" />;
      default: return null;
    }
  };

  return (
    <div className="bg-gradient-to-r from-[var(--color-hero)] to-[var(--color-accent-2)] text-white py-2 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

      {/* Inline styles for marquee animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          animation: scroll 35s linear infinite;
          width: fit-content;
        }
      `}</style>

      {/* Scrolling marquee container */}
      <div className="relative z-10 overflow-hidden">
        <div className="marquee-track">
          {/* First set */}
          {announcements.map((item, index) => (
            <span key={index} className="flex items-center text-xs font-medium tracking-wide shrink-0">
              <span className="px-8 whitespace-nowrap">{item.text}</span>
              <span className="text-white/70 px-4">{renderIcon(item.icon)}</span>
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {announcements.map((item, index) => (
            <span key={`dup-${index}`} className="flex items-center text-xs font-medium tracking-wide shrink-0">
              <span className="px-8 whitespace-nowrap">{item.text}</span>
              <span className="text-white/70 px-4">{renderIcon(item.icon)}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-white/20 rounded-full p-1 transition-all duration-[var(--timing-fast)] z-20"
        aria-label="Close announcement"
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  );
}
