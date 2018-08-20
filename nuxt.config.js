module.exports = {
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
    ** Add element-ui in our app, see plugins/element-ui.js file
    */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'yitalk-index',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Index page for Yitalk' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
