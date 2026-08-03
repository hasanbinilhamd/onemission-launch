import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
    './launch.config.ts',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Inter', 'Segoe UI', 'sans-serif'],
        chakra: ['Chakra Petch', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        charcoal: '#080A0C',
        graphite: '#111418',
        bone: '#F4EFE7',
        mutedgold: '#C6B08A',
      },
      boxShadow: {
        glow: '0 0 80px rgba(198, 176, 138, 0.12)',
      },
    },
  },
};
