var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!bootstrap/dist/js/bootstrap.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$':'jquery',
            'jQuery':'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: 'public/js/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            ToDo: 'app/components/ToDo.jsx',
            ToDoList: 'app/components/ToDoList.jsx',
            ToDoForm: 'app/components/ToDoForm.jsx',
            ToDoApp: 'app/components/ToDoApp.jsx',
            Store: 'app/store/Store.jsx',
            Actions: 'app/store/Actions.jsx'
        }
    },
    module:{
        loaders:[
            {
                loader: 'babel-loader',
                query: {
                    presets: ['babel-preset-es2015', 'react']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules | bower_components)/
            },
            {
                loader: 'file-loader',
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/
            }
        ]
    }
}