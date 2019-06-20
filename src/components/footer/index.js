import React, { Fragment, Component} from "react"
import styled from "./index.scss"
const tabArr = [
    {
        icon: "icon-home",
        title: "首页"
    },
    {
        icon: "icon-apps",
        title: "分类"
    },
    {
        icon: "icon-cart",
        title: "购物车"
    },
    {
        icon: "icon-my",
        title: "我的"
    }

]
export default class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <Fragment>
                <div className={styled.z_footer}>
                    <ul>
                        {
                            tabArr.map((item,i) => (
                                <li key={i}>
                                    <div className={'iconfont '+ item.icon}></div>
                                    <h3>{item.title}</h3>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
}