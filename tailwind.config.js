 /** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
   theme: {
     extend: {

      fontFamily: {
        bellefair: [ "Bellefair", "serif" ],
        barlow: [ "Barlow Condensed", "sans-serif" ],
        barlowRegular: ["Barlow", "sans-serif"]
      },

      fontSize: {
        "preset-1": "144px",
        "preset-2": "110px",
        "preset-3": "56px",
        "preset-4": "32px",
        "preset-5": "28px",
        "preset-6": "14px",
        "preset-7": "16px",
        "preset-8": "18px",
      },

      lineHeight: {
        auto: "normal",
        "preset-1": "171.9%",
        "preset-2": "114.6%",
        "preset-3": "64.2%",
        "preset-4": "36.7%",
        "preset-5": "33.6%",
        "preset-6": "32.1%",
        "preset-7": "16.8%",
        "preset-8": "19.2%",
        "preset-9": "180%",
      },

      letterSpacing: {
        "preset-1": "0px",
        "preset-2": "2px",
        "preset-3": "4px",
      },

     },
   },
   plugins: [],
 } 



