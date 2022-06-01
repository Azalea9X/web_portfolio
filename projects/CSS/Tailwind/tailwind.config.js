module.exports = {
	content: [ '../../**/*.{html, js}' ],
	theme: {
		extend: {}
	},
	plugins: [],

	variants: {
		appearance: [ 'responsive' ],
		// ...
		borderColor: [ 'responsive', 'hover', 'focus' ],
		// ...
		outline: [ 'responsive', 'focus' ],
		// ...
		zIndex: [ 'responsive' ]
	}
};
