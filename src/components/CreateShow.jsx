import React, { Component } from 'react'
import '../css/main.css'

class CreateShow extends Component {

    render() {
        return (
            <article className="article">
                <h1>생성</h1>
                <form action="create_process" method="post" className="form" onSubmit={(e) => { e.preventDefault(); this.props.addList(e.target.title.value, e.target.desc.value) }} >
                    <input name="title" type="text" placeholder="title" />
                    <textarea name="desc" placeholder="desc" id="" cols="30" rows="8"></textarea>
                    <input type="submit" value="추가" />
                </form>
            </article>
        )
    }
}

export default CreateShow
