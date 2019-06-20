//可以在当前js中使用jsx语法
import React from "react";
//操作DOM
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
    <App/>,
    document.getElementById("app"),
    ()=>{
        console.log("挂载成功")
    }
)
