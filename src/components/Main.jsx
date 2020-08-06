import React, { Component } from 'react'
import '../css/main.css'

class Main extends Component {
    render() {
        return (
            <li>
                <a href="/" onClick={(e) => { e.preventDefault(); this.props.changeContent(); }}>내가 할 목록 리스트 : {this.props.title}</a>
            </li>
        )
    }
}

export default Main
