import React, { Component } from 'react'

const styles = {
    h1: {
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        margin: 0,
        padding: 0,
        height: 100,
        lineHeight: '100px',
    }


}


class Header extends Component {
    render() {
        return (
            <header style={styles.all}>
                <h1 style={styles.h1}>{this.props.title}</h1>
            </header>
        )
    }
}

export default Header
