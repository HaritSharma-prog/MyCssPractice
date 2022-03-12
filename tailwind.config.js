module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        hero: "900px",
        "480": "480px",
        "102":"926px",
        "99.7":"99.7%"

      },
      width: {
        "45pc": "45%",
        430: "430px",
        231: "231px",
        "90":"90%",
        "91":"91%",
        "99.7":"99.7%",
        "90px":"90px"

      },
      padding: {
        "2/3": "55.55%",
        "1/1": "100%",
        0.5: "0.15rem",
      },
      left:{
        "80":"80%",
        "65":"65%"
      },
      
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
        eina:["Eina01-Regular","eina"],
        LeagueSpartan:['League Spartan', 'sans-serif']
      },
      gap:{
        0.5:"0.5px"
      },
    },
  },
  plugins: [],
};
