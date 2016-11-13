var webpack = require("webpack");

module.exports = {
	devtool: 'eval-source-map',
	entry: {
		javascript: ['bootstrap-loader', './index.jsx'],
		html: './index.html'
	},
	output: {
			filename: 'index.bundle.js',
			sourceMapFilename: 'index.bundle.js.map'
	},
	module: {
			loaders: [{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},{
				test: /\.scss$/,
				loaders:['style', 'css?sourceMap', 'sass?sourceMap']
			},{
				// required for bootstrap-loader
				test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url?limit=10000',
			},{
				// required for bootstrap-loader
				test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
				loader: 'file'
			}, {
				test: /\.html$/,
				loader: 'file?name=[name].[ext]'
			}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		// required for bootstrap-loader'
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	]
};

