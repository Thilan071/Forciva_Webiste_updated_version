/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1F3440',
        'secondary-dark': '#2C6566',
        'primary-accent': '#25BDB0',
        'secondary-accent': '#56D7B4',
        'cta-yellow': '#EDBF43',
      },
      fontFamily: {
        'sans': ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
