const path = require('path');// 파일이나 디렉터리 경로를 다루기 위한 NodeJS 기본 모듈

module.exports = {
	//진입점
	entry: {
		app : path.join(__dirname, 'main.js') //__dirname 현재 파일의 경로
	},
	//결과물에 대한 설정
	output : {
		filename : '[name].js', // app.js
		path : path.join(__dirname, 'dist')
	},
	module : {},
	plugins : ''
}