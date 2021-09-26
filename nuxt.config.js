export default {
  target: 'static',

  head: {
    title: 'AudioBookshelf',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Mono&family=Ubuntu+Mono&family=Open+Sans:wght@400;600&family=Gentium+Book+Basic&family=Material+Icons' }
    ],
    script: [
      {
        src: '/prism.js'
      }
    ]
  },

  css: [
    '@/assets/app.css'
  ],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
  ],

  build: {
  }
}
