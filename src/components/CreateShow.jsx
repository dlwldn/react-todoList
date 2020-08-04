import React, { Component } from 'react'

const styles = {
    article: {
        minWidth: '45%',
        padding: '20px',
        backgroundColor: '#eee',
        borderRadius: '20px',
        marginLeft: '20px',
    },

    mainDiv: {
        padding: '20px',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
    }
}

class CreateShow extends Component {

    render() {
        return (
            <article style={styles.article}>
                <h1>할일 만들기</h1>
                <form action="" style={styles.form}>
                    <input type="text" placeholder="title" />
                    <textarea placeholder="desc" id="" cols="30" rows="8"></textarea>
                    <input type="submit" value="추가" onClick={(e) => { e.preventDefault(); }} />
                </form>

            </article>
        )
    }
}

export default CreateShow
