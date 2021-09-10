const path = require('path')// �����̳� ���͸� ��θ� �ٷ�� ���� NodeJS �⺻ ���
const { merge } = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
// const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, opts) => {
  const config = {
    /* resolve: {
			extensions: ['.js', '.vue']
		}, */
    // ������ �о���̱� �����ϴ� ����
    // `__dirname`�� ���� ������ ��ġ�� �˷��ִ� NodeJS ���� ����
    entry: {
      app: path.join(__dirname, 'main.js') // __dirname ���� ������ ���
    },
    // �����(����)�� ��ȯ�ϴ� ����
    // `[name]`�� `entry`�� Key �̸�, `app`
    output: {
      filename: '[name].js', // app.js
      path: path.join(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
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
    plugins: [ // ���鸵 �� ������� ó�� ��� �� �پ��� �÷����ε��� ����
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'index.html')
      })
      /* new CopyPlugin([
				{
					from: 'assets/',
					to: ''
				}
			]) */
    ]
  }

  if (opts.mode === 'development') { // ���߿�
    return merge(config, {
      // ���� �ð��� ����, ������� ������ ���
      devtool: 'eval',
      devServer: {
        // �ڵ����� �⺻ �������� �����մϴ�
        open: false,
        // HMR, https://webpack.js.org/concepts/hot-module-replacement/
        hot: true
      }
    })
  } else if (opts.mode === 'production') { // opts.mode === 'production' //��ǰ��
    return merge(config, {
      // �뷮�� ���� ���
      devtool: 'cheap-module-source-map',
      plugins: [
        new CleanWebpackPlugin() // ����(build) ���� `output.path`(`dist` ���͸�) �� ���� ��� ���� ����
      ]
    })
  }
}
