'use strict';

const { watch } = require('fs')
const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		home: './js/script.js',
		posts: './js/posts/index.js',
		main: './js/main/index.js',
		post: './js/post/index.js',
	},
	output:{
		filename: '[name].js',
		path: __dirname + '/js/dist',
		chunkFilename: '[id].[chunkhash].js'
	},
	module: {}
}