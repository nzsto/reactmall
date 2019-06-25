import React, { Component } from "react"
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Home from "views/home"
import Class from "views/class"
import Cart from "views/cart"
import Mine from "views/mine"

class Routers extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route path="/home" component={Home} />
                    <Route path="/class" component={Class} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/mine" component={Mine} />
                </Switch>
            </Router>
        )
    }
}

export default Routers