import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { blueDarkTheme } from "./themes/blueTheme";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "blueDarkTheme",
      themes: {
        blueDarkTheme: blueDarkTheme,
      },
    },
  });
  app.vueApp.use(vuetify);
});
