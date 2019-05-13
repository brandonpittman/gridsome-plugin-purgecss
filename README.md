# gridsome-plugin-purgecss

This plugin will add [Purgecss](https://www.purgecss.com) to your
[Gridsome](http://gridsome.org) project.

To use this plugin, run `npm install -D gridsome-plugin-purgecss` add the following to your `gridsome.config.js`.

```javascript
plugins: [
  {
    use: 'gridsome-plugin-purgecss',
	// default options, the following will be included if you don't provide anything
	options: {
	  content: [
        './src/**/*.vue',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.pug',
        './src/**/*.md'
      ],
	  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
	}
  }
]
```
