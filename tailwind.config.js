export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#05070d",
          900: "#080d18",
          850: "#0b1120",
          800: "#0f1729",
          700: "#162037",
          600: "#1e2a45",
        },
        cloud: {
          50: "#f7f9fd",
          100: "#eef3fb",
          200: "#dfe7f5",
          300: "#c9d6ea",
        },
        ink: {
          950: "#080d18",
          900: "#0c1424",
          700: "#2a3854",
          600: "#3c4c69",
          500: "#52617a",
          400: "#6d7c94",
        },
        accent: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
        },
        iris: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
        line: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          strong: "rgba(255, 255, 255, 0.18)",
          light: "rgba(8, 13, 24, 0.1)",
          "light-strong": "rgba(8, 13, 24, 0.18)",
        },
      },
      fontFamily: {
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": [
          "clamp(3.4rem, 9vw, 7.5rem)",
          { lineHeight: "0.88", letterSpacing: "-0.055em", fontWeight: "600" },
        ],
        "display-xl": [
          "clamp(3rem, 6.6vw, 5.6rem)",
          { lineHeight: "0.92", letterSpacing: "-0.045em", fontWeight: "600" },
        ],
        "display-lg": [
          "clamp(2.45rem, 4.8vw, 4rem)",
          { lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "600" },
        ],
        h1: [
          "clamp(2.1rem, 4vw, 3.25rem)",
          { lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "600" },
        ],
        h2: [
          "clamp(1.75rem, 3vw, 2.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "600" },
        ],
        h3: [
          "clamp(1.35rem, 2vw, 1.75rem)",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        h4: [
          "clamp(1.1rem, 1.4vw, 1.25rem)",
          { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "body-xl": ["1.1875rem", { lineHeight: "1.7", letterSpacing: "-0.005em" }],
        "body-lg": ["1.0625rem", { lineHeight: "1.75" }],
        body: ["1rem", { lineHeight: "1.75" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.65" }],
        "body-xs": ["0.8125rem", { lineHeight: "1.55" }],
        eyebrow: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.24em", fontWeight: "600" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        section: "clamp(4.5rem, 9vw, 8.5rem)",
        "section-sm": "clamp(3.5rem, 6vw, 6rem)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        pill: "9999px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34, 211, 238, 0.22), 0 18px 60px -18px rgba(34, 211, 238, 0.55)",
        "glow-violet":
          "0 0 0 1px rgba(139, 92, 246, 0.22), 0 18px 60px -18px rgba(139, 92, 246, 0.45)",
        card: "0 30px 80px -42px rgba(1, 5, 15, 0.8)",
        "card-light": "0 26px 70px -38px rgba(20, 40, 80, 0.35)",
        nav: "0 18px 48px -24px rgba(2, 6, 18, 0.7)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(34, 211, 238, 0.16) 0%, rgba(139, 92, 246, 0.16) 100%)",
        "brand-gradient-strong":
          "linear-gradient(120deg, #67e8f9 0%, #22d3ee 35%, #8b5cf6 100%)",
        "hero-radial":
          "radial-gradient(60% 60% at 70% 20%, rgba(34, 211, 238, 0.18) 0%, rgba(139, 92, 246, 0.12) 38%, transparent 72%)",
        "panel-radial":
          "radial-gradient(120% 120% at 10% 0%, rgba(34, 211, 238, 0.14) 0%, transparent 45%), radial-gradient(100% 100% at 90% 100%, rgba(139, 92, 246, 0.16) 0%, transparent 52%)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-out-expo": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.06)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "scroll-line": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "45%": { transform: "scaleY(1)", transformOrigin: "top" },
          "55%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        "marquee-reverse": "marquee-reverse 38s linear infinite",
        float: "float 7s ease-in-out infinite",
        "pulse-glow": "pulse-glow 6s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        "scroll-line": "scroll-line 2.2s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
};
