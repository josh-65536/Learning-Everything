module.exports = {
    entry: './src/apple.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                // JavaScript Regex expressions are characters
                // between the two forward slashes.
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        '@babel/preset-env'
                    ]
                }
            },
        ]
    }
};