/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'nlm-primary': '#4285F4',
        'nlm-accent': '#1A73E8', 
        'nlm-bg': '#F8F9FA',      
        'nlm-surface': '#FFFFFF', 
        'nlm-text': '#202124',    
        'nlm-border': '#DADCE0',  
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
