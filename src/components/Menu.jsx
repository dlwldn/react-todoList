import React, { Component } from 'react'

const styles = {
    div: {
        width: '100%',
        height: 60
    },

    button: {
        width: '50%',
        height: 30
    },

    input: {
        width: '100%',
        height: 30,
        border: 'none',
        backgroundColor: 'orange',
        color: 'white',
    }
}



class Menu extends Component {

    render() {
        return (
            <div style={styles.div}>
                <input style={styles.button} type="button" value="생성" onClick={() => { this.props.clickBtn('create') }} />
                <input style={styles.button} type="button" value="업데이트" onClick={() => { this.props.clickBtn('update') }} />
                <input style={styles.input} type="text" placeholder="삭제" onClick={() => { this.props.clickBtn('delete') }} />
            </div>
        )
    }
}

export default Menu
