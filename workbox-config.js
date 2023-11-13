module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{js,png,html,svg}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};