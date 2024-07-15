// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error - mentioned in vuetify documentation itself.
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "nuxt-graphql-client"
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  eslint: {
    // options here
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    lazy: true,
    langDir: "locales",
    locales: [
      {
        code: "en",
        file: "en.json",
        name: "English",
      },
      {
        code: "es",
        file: "es.json",
        name: "Spanish",
      },
      {
        code: "fr",
        file: "fr.json",
        name: "French",
      },
    ],
    defaultLocale: "en",
    strategy: "no_prefix",
  },
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://ap-south-1.cdn.hygraph.com/content/ckzmzv85g5aln01xo39vf0ngu/master'
    }
  },
  devtools: { enabled: true },
});
