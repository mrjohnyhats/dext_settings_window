const path = require('path');

module.exports = {
    entry: {
        index: [path.resolve(__dirname, 'jsx', 'index.jsx')]
    },
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: ['babel-loader']
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    target: 'electron-renderer'
};
