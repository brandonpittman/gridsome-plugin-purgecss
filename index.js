const purgecss = require('@fullhuman/postcss-purgecss')

class PurgeCssPlugin {
  static defaultOptions() {
    return {
      content: [
        './src/**/*.vue',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.html',
        './src/**/*.pug',
        './src/**/*.md',
      ],
      whitelist: [
        'body',
        'html',
        'img',
        'a',
        'g-image',
        'g-image--lazy',
        'g-image--loaded',
      ],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }
  }

  constructor(api, options) {
    const purgecssOptions = options

    api.chainWebpack(config => {
      config.module
        .rule('css') // or sass, scss, less, postcss, stylus
        .oneOf('normal') // or module
        .use('postcss-loader')
        .tap(options => {
          if (process.env.NODE_ENV === 'production') {
            options.plugins.push(purgecss(purgecssOptions))
          }
          return options
        })
    })
  }
}

module.exports = PurgeCssPlugin
