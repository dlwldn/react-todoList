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
    this.maxNumber = 5;
    this.state = {
      mode: 'read',
      listNumber: 2,
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
    const data = this.state.myLists.filter((content) => content.id === this.state.listNumber);
    if (data[0].id === this.state.listNumber) {
      return data[0];
    }
  }


  onChangeMode() {
    let _show, _content = null;

    if (this.state.mode === 'read') {
      _content = this.getReadContent();
      _show = <ContentShow title={_content.title} desc={_content.desc} />;
    } else if (this.state.mode === 'create') {
      this.maxNumber = this.maxNumber + 1;
      _show = <CreateShow addList={(_title, _desc) => {
        const _myList = this.state.myLists.concat({ id: this.maxNumber, title: _title, desc: _desc });
        this.setState({
          myLists: _myList,
          listNumber: this.maxNumber,
          mode: 'read',
        })
      }} />
    } else if (this.state.mode === 'update') {
      _content = this.getReadContent();
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
      const contents = Array.from(this.state.myLists);
      _content = this.getReadContent();
      console.log(_content);
      console.log(contents);
      console.log(this.state.listNumber);


      if (_content.id === this.state.listNumber) {
        contents.splice(this.state.listNumber, 1);
        console.log(contents);

        // this.setState({
        //   myLists: contents,
        // })

        _show = <ContentShow title="삭제되었습니다." />;
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
                <Main title={list.title} key={list.id} id={list.id} changeContent={() => { this.setState({ listNumber: list.id, mode: 'read', id: list.id }) }} />
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