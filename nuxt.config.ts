// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  routeRules: {
    "/**": { ssr: false }, // make all pages SPA, in dashboards we don't need SEO / server side rendering 
    "/addCreditCard": { ssr: true }, // make only this page SSR to be more secure 
  },

  devtools: { enabled: true },

  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css",
    "@/assets/scss/main.scss",
  ],

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/variables.scss" as *;', // import my variables in all scss (scoped) template style files
        },
      },
    },

    define: {
      "process.env.DEBUG": false,
    },
  },
});
