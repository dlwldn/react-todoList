import React, { Component } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import ContentShow from './components/ContentShow'
import Menu from './components/Menu'
import CreateShow from './components/CreateShow'

const styles = {
  margin: 0,
  padding: 0,
  width: '100%',
  height: '100vh',

  ul: {
    minWidth: '50%',
    padding: '20px',
    backgroundColor: '#eee',
    borderRadius: '20px',

  },

  mainDiv: {
    padding: '20px',
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: 100,
  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'create',
      listNumber: 0,
      myLists: [
        { id: 1, title: 'HTML', desc: 'HTML 끝' },
        { id: 2, title: 'CSS', desc: 'CSS 끝' },
        { id: 3, title: 'JAVASCRIPT', desc: 'JAVASCRIPT 하는중!' },
        { id: 4, title: 'REACT', desc: 'REACT 시작!' },
        { id: 5, title: 'VUE', desc: 'VUE는 나중에..' },
      ],


    }
  }


  render() {
    let _title, _desc, _show, item = null;

    if (this.state.mode === 'read') {
      _title = this.state.myLists[this.state.listNumber].title;
      _desc = this.state.myLists[this.state.listNumber].desc;
      _show = <ContentShow title={_title} desc={_desc} />;
    } else if (this.state.mode === 'create') {
      _show = <CreateShow addList={(_title, _desc) => {
        this.state.myLists = this.state.myLists.concat({ id: this.state.myLists.length + 1, title: _title, desc: _desc });
        this.setState({
          myLists: this.state.myLists
        })
      }} />
    }



    return (
      <div style={styles}>
        <Header title='todoList - React' />
        <Menu clickBtn={(md) => { this.setState({ mode: md }) }} />
        <div style={styles.mainDiv}>
          <ul style={styles.ul}>
            {this.state.myLists.map((list) => {
              return (
                <Main title={list.title} key={list.id} id={list.id} changeContent={() => { this.setState({ listNumber: (list.id - 1), mode: 'read' }) }} />
              );
            })}
          </ul>
          {_show}
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;