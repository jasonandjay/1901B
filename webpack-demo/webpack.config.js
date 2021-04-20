const path = require('path');

module.exports = {
    //  输出
    output: {
        publicPath: '/dist'
    },
    // 配置webpack起服务
    devServer: {
        open: true,
        // 0.0.0.0 127.0.0.1 localhost指向自己
        host: '0.0.0.0',
        hot: true,
        liveReload: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'scss': path.resolve(__dirname, 'src/scss'),
            'module': path.resolve(__dirname, 'src/module')
        },
        extensions: ['.js', '.json', '.wasm', '.webp'],
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: '/src',
            exclude: '/node_modules',
            use: ['babel-loader'],
        },{
            test: /\.(css|scss|sass)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },{
            test: /\.(jpg|jpeg|png|gif|webp)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10*1024
                }
            }]
        },{
            test: /\.(svg|eot|ttf|woff|woff2)/,
            use: ['file-loader']
        }]
    }
}