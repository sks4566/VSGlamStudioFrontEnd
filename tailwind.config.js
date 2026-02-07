/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1d1b1a",
        clay: "#b98f78",
        sand: "#f5eee7",
        blush: "#e7c7b8",
        rose: "#c9796d",
        mist: "#f9f6f3",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 50px rgba(29, 27, 26, 0.12)",
        card: "0 18px 40px rgba(29, 27, 26, 0.08)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245,238,231,0.96) 50%, rgba(231,199,184,0.92) 100%)",
        "sunset": "radial-gradient(circle at 15% 20%, rgba(201,121,109,0.22), transparent 50%), radial-gradient(circle at 80% 10%, rgba(185,143,120,0.22), transparent 45%), linear-gradient(180deg, #ffffff 0%, #f9f6f3 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
