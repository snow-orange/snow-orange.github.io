module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/standard'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		indent: ['error', 'tab'],
		"comma-dangle": ["error", "only-multiline"],
		semi: "off",
		quotes: "off",
		curly: ["error", "multi-or-nest"],
		'space-unary-ops': "off",
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-tabs': ['error', { allowIndentationTabs: true }]
	}
};
