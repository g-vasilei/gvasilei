/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        body: '#0f1115',
        card: '#14171c',
        border: '#1a1e26',
      },
      fontFamily: {
        gabarito: ['Gabarito', 'serif'],
        nabla: ['Nabla', 'serif'],
      },
    },
  },
  plugins: [],
}
