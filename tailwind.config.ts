import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#1C4587',
        level: {
          '1': '#FFFFFF',
          '2': '#F3F3F3',
        },
        status: {
          'positive': '#4ECB71',
          'notification': '#F6893C',
          'negative': '#B3261E'
        },
        transparent: colors.transparent,
        white: colors.white,
        yellow: colors.amber,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.purple,
        pink: colors.pink,
        gray: colors.coolGray,
        coolGray: colors.coolGray,
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
      }
    },
  },
  plugins: [],
};
export default config;
