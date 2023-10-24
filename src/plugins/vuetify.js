import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify, {
  options: {
    customProperties: true,
  },
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // This should match your icon font alias
  },
  theme: {
    dark: false, // Set to true if you want a dark theme
    themes: {
      light: {
        primary: "#007BFF", // Your custom primary color
        secondary: "#FF5733", // Your custom secondary color
        toto: "#FDFDFD",
      },
      dark: {
        primary: "#007BFF", // Custom primary color for dark theme
        secondary: "#FF5733", // Custom secondary color for dark theme
        // Add more custom theme properties for dark theme as needed
      },
    },
  },
});
