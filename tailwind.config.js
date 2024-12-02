module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Include all relevant paths to your files
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeInOut 2s infinite',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
