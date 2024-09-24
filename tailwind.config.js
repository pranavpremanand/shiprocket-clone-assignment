/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#735AE5",
        primaryText:'#0B0757'
      },
      boxShadow:{
        'top':'0 0 20px 0 rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}