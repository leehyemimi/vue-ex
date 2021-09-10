const path = require('path');// 파일이나 디렉터리 경로를 다루기 위한 NodeJS 기본 모듈
const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
//const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, opts) => {
	const config = {
		/*resolve: {
			extensions: ['.js', '.vue']
		},*/
		// 파일을 읽어들이기 시작하는 진입
		// `__dirname`은 현재 파일의 위치를 알려주는 NodeJS 전역 변수
		entry: {
			app : path.join(__dirname, 'main.js') //__dirname 현재 파일의 경로
		},
		// 결과물(번들)을 반환하는 설정
		// `[name]`은 `entry`의 Key 이름, `app`
		output : {
			filename : '[name].js', // app.js
			path : path.join(__dirname, 'dist')
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					use: 'vue-loader'
				},
				{
					test: /\.js$/,
					exclude : /node_modules/,
					use: 'babel-loader'
				},
				{
					test: /\.css$/,
					use: [
						'vue-style-loader',
						'css-loader',
						'postcss-loader'
					]
				},
				{
					test: /\.scss$/,
					use: [
						'vue-style-loader',
						'css-loader',
						'postcss-loader',
						'sass-loader'
					]
				}
			]
		},
		plugins: [  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
			new VueLoaderPlugin(),
			new HtmlWebpackPlugin({
				template:path.join(__dirname,'index.html')
			}),
			/*new CopyPlugin([
				{
					from: 'assets/',
					to: ''
				}
			])*/
		]
	}

	if (opts.mode === 'development') { //개발용
		return merge(config, {
			// 빌드 시간이 적고, 디버깅이 가능한 방식
			devtool: 'eval',
			devServer: {
				// 자동으로 기본 브라우저를 오픈합니다
				open: false,
				// HMR, https://webpack.js.org/concepts/hot-module-replacement/
				hot: true
			}
		})
	} else if(opts.mode === 'production'){// opts.mode === 'production' //제품용
		return merge(config, {
			// 용량이 적은 방식
			devtool: 'cheap-module-source-map',
			plugins: [
				new CleanWebpackPlugin() // 빌드(build) 직전 `output.path`(`dist` 디렉터리) 내 기존 모든 파일 삭제
			]
		})
	}
}