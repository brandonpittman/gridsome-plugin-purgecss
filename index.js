const purgecss = require('@fullhuman/postcss-purgecss')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || []
  }
}

class PurgeCssPlugin {
  constructor(api, options) {
    api.chainWebpack(config => {
      config.module
        .rule('css') // or sass, scss, less, postcss, stylus
        .oneOf('normal') // or module
        .use('postcss-loader')
        .tap(options => {
          if (process.env.NODE_ENV === 'production') {
            options.plugins.push(
              purgecss({
                content: [
                  './src/**/*.vue',
                  './src/**/*.js',
                  './src/**/*.jsx',
                  './src/**/*.md'
                ],
                extractors: [
                  {
                    extractor: TailwindExtractor,
                    extensions: ['vue', 'js', 'jsx', 'md']
                  }
                ]
              })
            )
          }
          return options
        })
    })
  }
}

module.exports = PurgeCssPlugin
