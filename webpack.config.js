const path = require('path');

module.exports = {
    entry: ['./examples/angular.html', './examples/react.html', './examples/vue.html'],
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
},
};