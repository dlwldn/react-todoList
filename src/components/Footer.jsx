import React, { Component } from 'react'

const styles = {
    footer: {
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        left: 0,
        height: 80,
        padding: '20px',
    },

    p: {
        fontSize: '12px'
    }
}


class Footer extends Component {
    render() {
        return (
            <footer style={styles.footer}>
                <p style={styles.p}>W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy. Copyright 1999-2020 by Refsnes Data. All Rights Reserved.
Powered by W3.CSS.</p>
            </footer>
        )
    }
}

export default Footer
