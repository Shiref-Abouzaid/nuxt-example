import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives';
import defaultOptions from '@/utils/vuetify-default-options';
export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
      ssr: true,
      components,
      directives,
      ...defaultOptions,//set my theme as default
    })
  
    nuxtApp.vueApp.use(vuetify)
  })