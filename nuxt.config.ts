// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css',
    '@/assets/scss/main.scss',
   
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/variables.scss" as *;',
        },
      },
    },
    define: {
      'process.env.DEBUG': false,
    },
  },
})
