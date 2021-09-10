module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2015,
		sourceType: 'module'
	},
	env: {
		browser: true,
		node: true
	},
	extends: [
		// https://github.com/standard/eslint-config-standard
		'standard',
		// https://eslint.vuejs.org/rules/
		// 'plugin:vue/base'
		'plugin:vue/essential'
		// 'plugin:vue/strongly-recommended'
		// 'plugin:vue/recommended'
	],
	plugins: [
		'vue'
	],
	rules: {
		// ���� ��Ģ�� �߰��� �� �ֽ��ϴ�
		'no-new' : 0,
		'vue/html-self-closing': ['error', {
			'html': {
				'void': 'always',
				'normal': 'always',
				'component': 'always'
			},
			'svg': 'always',
			'math': 'always'
		}]
	}
}