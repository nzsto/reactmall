import React, { Component } from 'react'
import Header from "components/header"
import Footer from "components/footer"
export default class App extends Component {
    render() {
        return(
            <div>
                <Header />
                这是内容区
                <Footer />
            </div>
        )
    }
}
