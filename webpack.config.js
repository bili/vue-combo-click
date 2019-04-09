var path = require('path');

const env = process.env.NODE_ENV

module.exports = {
    mode: env == 'prod' ? 'production' : 'development',
    entry: {
        'index': './src/index.js',
        'vue-combo-click': './src/vue-combo-click.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: env == 'prod' ? '[name].min.js' : '[name].js',
        libraryTarget: 'umd',
        library: 'VueComboClick',
        umdNamedDefine: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};