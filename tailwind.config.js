/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "666CA3": "#666CA3", 
        "13183F": "#13183F", 
        "83869A": "#83869A", 
        "F74780": "#F74780", 
        "FFA7C3": "#FFA7C3", 
        "FFFFFF": "#FFFFFF", 
        "F0F1FF": "#F0F1FF",
        "g1a": "#FF6F48", 
        "g1b": "#F02AA6", 
        "g2a": "#4851FF", 
        "g2b": "#F02AA6"
      },
      fontFamily:{
        "sans": ["Plus Jakarta Sans", "sans"]
      },
      screens: {
        "xs": "400px",
      }
    },
  },
  plugins: [],
}