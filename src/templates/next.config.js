const glob = require('glob')

exports.exportPathMap = () => {
  const pathMap = {}
  glob.sync('pages/**/*.js', { ignore: 'pages/_document.js' }).forEach(s => {
    const path = s.split(/(pages|\.)/)[2].replace(/^\/index$/, '/')
    pathMap[path] = { page: path }
  })
  return pathMap
}

exports.webpack = (config) => {
  config.module.rules.push({
    test: /\.(css|html)/,
    loader: 'emit-file-loader',
    options: {
      name: 'dist/[path][name].[ext]'
    }
  }, {
    test: /\.css$/,
    use: ['babel-loader', 'raw-loader', 'postcss-loader']
  }, {
    test: /\.html$/,
    use: ['babel-loader', 'raw-loader']
  })
  return config
}
