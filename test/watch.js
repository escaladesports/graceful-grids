'use strict'
const compile = require('./compile')
const chokidar = require('chokidar')

chokidar.watch('**/*.scss', {
		ignored: /node_modules/,
		ignoreInitial: true
	})
	.on('all', function(type, path){
		compile()
	})

