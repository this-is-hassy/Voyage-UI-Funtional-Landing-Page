import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceVertical: {
          '0%, 100%': { transform: 'translateY(0)', transitionTimingFunction: 'ease-in' }, // ease-in for faster down
          '50%': { transform: 'translateY(-10px)', transitionTimingFunction: 'ease-out' }, // ease-out for slower up
        },
      },
      animation: {
        bounceVertical: 'bounceVertical 2s  infinite', // Shorter duration
      },
      colors: {
        "dark": '#232A3C',
        "medium": '#293245',
      },
      backgroundImage: {
        'hero-bg-img':"url(/main-img.png)",
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar'),
  ],
};
export default config;

