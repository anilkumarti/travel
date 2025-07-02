

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      // Add custom 3xl breakpoint:
      '3xl': '1920px', // or any value you prefer
    },
    extend: { },
  },
  plugins: [],
}