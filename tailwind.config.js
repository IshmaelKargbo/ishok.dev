module.exports = {
    purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'],
    content: [],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}