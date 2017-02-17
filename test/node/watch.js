'use strict'
const compile = require('./compile')
const chokidar = require('chokidar')
const browserSync = require('browser-sync')

// Watch files for compiling
chokidar.watch([
		'**/*.scss'
	], {
		ignored: /node_modules/,
		ignoreInitial: true
	})
	.on('all', function(event, path){
		console.log(`Change: ${path}`)
		if(path.indexOf('.scss') !== -1){
			compile()
		}
	})


// Watch files for browser sync
browserSync({
	server: 'test',
	files: [
		'test/*.html',
		'test/*.css'
	]
})
