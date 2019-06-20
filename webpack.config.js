//引入node核心模块
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")


//路径的配置
const PATH = {
    app:path.join(__dirname,"src/main.js"),
    build:path.join(__dirname,"./dist")
}


//webpack配置项
module.exports = {
    //用来定义开发环境还是生成环境
    mode:"development",
    //入口文件的配置
    entry:{
        app:PATH.app
    },
    //出口文件的配置
    output:{
        filename:"[name].js",
        path:PATH.build
    },
    //模块打包的配置
    module:{
        rules:[
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }, "sass-loader"]
            },
            {
                test:/\.(js|jsx)$/,
                use:{
                    //编译js
                    loader:"babel-loader",
                    //ES6转换ES5
                    options:{
                        presets:["@babel/env","@babel/react"]
                    }
                }
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        name:"[name][hash].[ext]",
                        limit:100,
                        outputPath:"./img"
                    }
                }
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                use:{
                    loader:"file-loader",
                    options:{
                        name:"[name][path].[ext]",
                        outputPath:"./iconfont"
                    }
                }
            }
        ]
    },
    //插件
    plugins:[
        //模板文件
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"index.html",
            title:"webpack-nzsto"
        }),
    ],
    //api代理
    devServer:{
        proxy:{}
    },
    //路径配置
    resolve:{
        alias:{
            "@": path.join(__dirname, "src"),
            "api": path.join(__dirname, "src/api"),
            "common": path.join(__dirname, "src/common"),
            "components":path.join(__dirname,"src/components"),
            "redux": path.join(__dirname, "src/redux"),
            "static": path.join(__dirname, "src/static"),
            "store": path.join(__dirname, "src/store"),
            "views": path.join(__dirname, "src/views")
        }
    }
}
