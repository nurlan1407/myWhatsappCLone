const tailwindcss = require("tailwindcss")

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        }),
        'postcss-preset-env',
        tailwindcss
    ],
};