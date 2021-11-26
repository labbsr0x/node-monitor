const path = require('path');

module.exports = {
    entry: ['./test/angular.html', './test/react.html', './test/vue.html'],
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
},
};