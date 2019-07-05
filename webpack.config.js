const path=require('path')
console.log(path.join(__dirname, 'src','app.js'));
module.exports =(env)=>{
    return {
		entry: path.join(__dirname, 'src',  'app.js'),
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'bundle.js',
		},
		module: {
			rules: [
				{
					loader: 'babel-loader',
					test: /\.js$/,
					exclude: /node_modules/,
				},
				{
					test: /\.s?css$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
				{
					test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|jpg)(\?[a-z0-9=.]+)?$/,
					loader: 'url-loader',
				},
			],
		},

		devtool: 'cheap-module-eval-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true,
		},
	};

} 