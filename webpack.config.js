let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let conf =  {
	entry:'./src/index.js',
    output: {
	   path: path.resolve(__dirname, './dist'),
	   filename: 'main.js',
	   publicPath: "dist/"
	},
   module: {
	   rules: [
		  {
		     test: /\.js$/,
			 loader: 'babel-loader'
		  },
		  {
			 test: /\.css$/,
			 use: ExtractTextPlugin.extract({
				use: 'css-loader'
			 })
		  }
	   ]
   },
   plugins: [
   		new ExtractTextPlugin("style.css"),
   ]
};


module.exports = (env, options) =>{
   let production = options.mode === 'production';
   conf.devtool = production ? false : 'eval-sourcemap';
   return conf;
}