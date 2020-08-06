import React, { Component } from 'react'
import '../css/main.css'

class UpdateShow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc,
        }
    }


    render() {
        return (
            <article className="article">
                <h1>업데이트</h1>
                <form action="create_process" method="post" className="form" onSubmit={(e) => { e.preventDefault(); this.props.updateList(this.state.id, this.state.title, this.state.desc) }} >
                    <input type="hidden" name="id" value={this.state.id}></input>
                    <input name="title" type="text" placeholder="title" value={this.state.title} onChange={(e) => { this.setState({ title: e.target.value }) }} />
                    <textarea name="desc" placeholder="desc" id="" cols="30" rows="8" value={this.state.desc} onChange={(e) => { this.setState({ desc: e.target.value }) }} />
                    <input type="submit" value="추가" />
                </form>
            </article>
        )
    }
}

export default UpdateShow
