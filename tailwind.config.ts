import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        acacia: {
          blue: '#1E40AF',
          blueStrong: '#1D4ED8',
          cyan: '#06B6D4',
          cyanDeep: '#0891B2',
          dark: '#0F172A',
          white: '#FFFFFF',
        },
      },
      boxShadow: {
        glow: '0 20px 60px rgba(14, 116, 144, 0.25)',
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};

export default config;
