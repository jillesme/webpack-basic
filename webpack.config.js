module.exports = {
  // our index file, if you want multiple bundles (e.g. visitor.js and admin.js)
  // turn this into an object with keys for each bundle
  entry: './src/index.js',
  output: {
    path: './public',
    // if you have multiple bundles as described ^ make sure to include [name]
    // (e.g. '[name].bundle.js)
    filename: 'bundle.js'
  },
  // config for all modules (files you include)
  module: {
    loaders: [
      {
        // regular expression to test the filename for
        test: /\.jsx?$/,
        // do not look in these folders
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        // syntactic sugar for -----v
        query: {
          presets: ['es2015']
        }
        // You could also use: loader: 'babel?presets[]=es2015'
        // this gets ugly real fast when you have multiple presets so I like
        // to use the query key, they both do the same thing though!
      }
    ]
  }
};
