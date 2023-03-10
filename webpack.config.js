const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExctractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin= require('optimize-css-assets-webpack-plugin');


module.exports= {
    entry: {
        'app':            './src/index.js',
        'assets/js/banner': './src/assets/js/banner.js',

    },

    output: {
        publicPath:"/",
        path: path.join(__dirname, "/app"),
        filename:'[name].js',
    },
    devServer: {
        // contentBase: path.join(__dirname, '/app'),
        static: path.join(__dirname, '/app'),
        port: 8081,
        open: true,
        // writeToDisk: true,
        devMiddleware: {
          writeToDisk: true,
         
        },


     

      },
    module:{
        rules:[
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },

            {
                test:/\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExctractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|svg|jpe?g|gif)$/,
                exclude: /images/,
                use: [
                  {
                    loader: "file-loader", 
                    options: {
                      name: '[name].[ext]',
                      outputPath: "assets/images",
                    }
                  }
                ]
              },
            ]
        },

    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
        new OptimizeCSSAssetsPlugin({}),
        new MiniCssExctractPlugin({
            filename:"assets/css/styles.css"
        }),
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html",
            chunks:['app']
        }),

        new HtmlWebpackPlugin({
            filename:"components/button.html",
            template:"./src/components/button.html",
            chunks:['app']
        }),

        new HtmlWebpackPlugin({
            filename:"components/textfield.html",
            template:"./src/components/textfield.html",
            chunks:['app']
        }),

        new HtmlWebpackPlugin({
            filename:"components/card.html",
            template:"./src/components/card.html",
            chunks:['app']
        }),

        new HtmlWebpackPlugin({
            filename:"components/banner.html",
            template:"./src/components/banner.html",
            chunks:['app' , 'assets/js/banner']
        })

    ]
}