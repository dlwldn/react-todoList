import React, { Component } from 'react'

const styles = {
    footer: {
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        left: 0,
        height: 80,
        padding: '30px',
    },

    p: {
        fontSize: '14px'
    }
}


class Footer extends Component {
    render() {
        return (
            <footer style={styles.footer}>
                <p style={styles.p}>Copyright &copy; 2020 Leejiwoo-todoList all rights reserved</p>
            </footer>
        )
    }
}

export default Footer
