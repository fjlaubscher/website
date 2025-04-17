import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6', // blue-500
          dark: '#2563eb', // blue-600
        },
        accent: {
          light: '#f59e42', // orange-400
          dark: '#ea580c', // orange-600
        },
        background: {
          light: '#f8fafc', // slate-50
          dark: '#0f172a', // slate-900
        },
        foreground: {
          light: '#0f172a', // slate-900
          dark: '#f8fafc', // slate-50
        },
        muted: {
          light: '#64748b', // slate-400
          dark: '#94a3b8', // slate-300
        },
      },
    },
  },
  plugins: [],
};

export default config;
