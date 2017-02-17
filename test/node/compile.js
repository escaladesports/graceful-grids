'use strict'
const sass = require('node-sass')
const fs = require('fs')


module.exports = () => {
	console.log('Compiling...')
	sass.render({
		file: './test/style.scss'
	}, (err, result) => {
		if(err) console.error(err)
		else{
			fs.writeFile('./test/style.css', result.css, 'utf-8', err => {
				if(err) console.error(err)
				else console.log('Done compiling')
			})
		}
	})
}