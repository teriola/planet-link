module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: '#218DFA',

        whitebg: '#F5F7FB',
        blacktext: '#333',

        blackbg: '#000',
        whitetext: '#ddd',

        graybg: '#1c1e21',
      }
    },
  },
  plugins: [],
}
