/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'poppins': ['Poppins', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
      colors: {
        'text': '#110d0d',
        'background': '#FBDE74',
        'primary': '#21232c',
        'secondary': '#ffcd2cff',
        'accent': '#6b6e70',
      }
    },
  },
  plugins: [],
}

