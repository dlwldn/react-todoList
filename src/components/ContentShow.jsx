import React, { Component } from 'react'

const styles = {
    article: {
        width: '100%',
        padding: '20px',
        backgroundColor: 'yellow',
        color: 'red',
        borderRadius: '20px',
        marginLeft: '20px',
    },

    h1: {
        marginBottom: '30px',
    },

    p: {
        color: 'gray',
    }
}

class ContentShow extends Component {
    render() {
        return (
            <article style={styles.article}>
                <h1 style={styles.h1}>{this.props.title}</h1>
                <p style={styles.p}>{this.props.desc}</p>
            </article>
        )
    }
}

export default ContentShow;
