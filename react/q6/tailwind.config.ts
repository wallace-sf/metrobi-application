import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './**/*.{jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
} satisfies Config;
