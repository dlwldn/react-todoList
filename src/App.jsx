import React, { Component } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import ContentShow from './components/ContentShow'
import Menu from './components/Menu'
import CreateShow from './components/CreateShow'
import UpdateShow from './components/UpdateShow'
import './css/main.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'read',
      listNumber: 0,
      maxNumber: 6,
      myLists: [
        { id: 1, title: 'HTML', desc: 'HTML 끝' },
        { id: 2, title: 'CSS', desc: 'CSS 끝' },
        { id: 3, title: 'JAVASCRIPT', desc: 'JAVASCRIPT 하는중!' },
        { id: 4, title: 'REACT', desc: 'REACT 시작!' },
        { id: 5, title: 'VUE', desc: 'VUE는 나중에..' },
      ],
    }
  }

  getReadContent() {
    let _content = null;
    _content = this.state.myLists[this.state.listNumber];
    return _content;
  }


  onChangeMode() {
    let _title, _desc, _show, _content = null;

    if (this.state.mode === 'read') {
      _title = this.state.myLists[this.state.listNumber].title;
      _desc = this.state.myLists[this.state.listNumber].desc;
      _show = <ContentShow title={_title} desc={_desc} />;
    } else if (this.state.mode === 'create') {
      _show = <CreateShow addList={(_title, _desc) => {
        const _myList = this.state.myLists.concat({ id: this.state.maxNumber, title: _title, desc: _desc });
        this.setState({
          myLists: _myList,
          maxNumber: this.state.maxNumber + 1,
          mode: 'read',
          listNumber: this.state.myLists.length,
        })
      }} />
    } else if (this.state.mode === 'update') {
      _content = this.getReadContent();
      console.log(_content);
      _show = <UpdateShow data={_content} updateList={(_id, _title, _desc) => {
        const _contents = Array.from(this.state.myLists);
        let i = 0;
        while (i < _contents.length) {
          if (_contents[i].id === _id) {
            _contents[i] = { id: _id, title: _title, desc: _desc };
            break;
          }
          i = i + 1;
        }
        this.setState({ myLists: _contents, mode: 'read' });
      }} />
    } else if (this.state.mode === 'delete') {
      if (window.confirm()) {
        var _contents = Array.from(this.state.myLists);
        let i = 0;
        while (i < _contents.length) {
          if (_contents[i].id === this.state.listNumber + 1) {
            _contents.splice(i, 1);
            break;
          }
          i = i + 1;
        }
        this.setState({
          mode: 'read',
          myLists: _contents,
        })
      }
    }

    return _show;
  }


  render() {

    return (
      <div>
        <Header title='todoList - React' />
        <Menu clickBtn={(md) => { this.setState({ mode: md }) }} />
        <div className="main">
          <ul className="list">
            {this.state.myLists.map((list) => {
              return (
                <Main title={list.title} key={list.id} id={list.id} changeContent={() => { this.setState({ listNumber: (list.id - 1), mode: 'read', id: list.id }) }} />
              );
            })}
          </ul>
          {this.onChangeMode()}
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;