import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./*.{ts,tsx,js,jsx}",
    "./Components/**/*.{ts,tsx,js,jsx}",
    "./Hooks/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lato',
      sans: ['"Space Grotesk"', "Plus Jakarta Sans", "sans-serif"],
    },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "marquee-slow": "marquee 40s linear infinite",
        "marquee-slow-reverse": "marquee-reverse 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
