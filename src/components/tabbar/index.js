import React, { Fragment, Component } from "react"
import {NavLink} from "react-router-dom"
import "./index.scss"
const tabArr = [
    {
        icon: "icon-home",
        title: "首页",
        link:"/home"
    },
    {
        icon: "icon-apps",
        title: "分类",
        link:"/class"
    },
    {
        icon: "icon-cart",
        title: "购物车",
        link:"/cart"
    },
    {
        icon: "icon-my",
        title: "我的",
        link:"/mine"
    }

]
const Tabbar = (WrapperComponent)=> class Tabbar extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <Fragment>
                <div className="z_content">
                    <WrapperComponent/>
                </div>
                <div className="z_footer">
                    <ul>
                        {
                            tabArr.map((item, i) => (
                                <li key={i}>
                                    <NavLink to={item.link} replace>
                                        <div className={'iconfont ' + item.icon}></div>
                                        <h3>{item.title}</h3>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
}
export default Tabbar