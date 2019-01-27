const pkg = require('./package');
const axios = require('axios');

import data from './cms';

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: '/' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,700' },
    ],
    script: [
      { src: "https://js.stripe.com/v3/" },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#f4f4f4' },

  /*
  ** Global CSS
  */
  css: [
    'assets/css/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/machineStates.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-WWD9HXW' }],
      ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faChevronRight', 'faChevronLeft', 'faChevronUp']
        }
      ]
    }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  generate: {
    subFolders: false,
    routes: () => {
      const routes = [
        ...Object.keys(data.business),
      ];
      Object.values(data.business).forEach(({business, stories}) => {
        routes.push(`${business.id}/checkout`); // adds checkout route for each business

        stories.forEach((story) => {
          if (story.slug) {
            routes.push(`${business.id}/${story.slug}`);
          }
        })
      });
      return routes;
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
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
