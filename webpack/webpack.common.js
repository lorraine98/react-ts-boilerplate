const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    //Resolve는 가져온 모듈을 찾는 데 도움이 되는 Webpack 라이브러리.
    resolve: {
        //배열에 적힌 순서대로 확장자를 찾음.
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        //node modules를 제외하고 ts, js, jsx, tsx 파일을 실행할 땐 babel-loader를 통해 실행하도록 지정.
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html')
        })
    ]
}