import React, { Component } from 'react'

const styles = {
    div: {
        width: '100%',
        height: 60,
        display: 'flex',
        justifyContent: 'space-between',
    },

    button: {
        width: '100%',
        height: 30
    },
}



class Menu extends Component {

    render() {
        return (
            <div style={styles.div}>
                <input style={styles.button} type="button" value="생성" onClick={() => { this.props.onChangeMode('create') }} />
                <input style={styles.button} type="button" value="업데이트" onClick={() => { this.props.onChangeMode('update') }} />
                <input style={styles.button} type="button" value="삭제" onClick={() => { this.props.onChangeMode('delete') }} />
            </div>
        )
    }
}

export default Menu
