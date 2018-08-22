module.exports = {
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  modules: [
    // With options
    ['@nuxtjs/proxy', { pathRewrite: { '^/api': '/api/v1' } }],
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
    title: '探意',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Index page for Yitalk' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
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
    extend(config, { isDev, isClient }) {
      config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')
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

