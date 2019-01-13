import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import Demo from './components/Demo';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: 'I am state',
        todos: [
            {title: 'Go to store', finished: false},
            {title: 'Learn Vue', finished: true},
            {title: 'Learn React', finished: false},
            {title: 'Finish Screencast', finished: true},
        ],
        msg: '',
        childMsg: 'parent default value',
    }
  }

  someMethod = () => {
      this.setState({
          message: 'state updated by arrow func'
      })
  };

  someMethodWithArg = (arg) => {
      this.setState({
          message: 'state updated with arg by arrow func'
      })
  };

  computedState = () => {
    return this.state.message + 'COMPUTED'
  };

  handleChange() {
      this.setState({
          msg: this.refs.inputDom.value
      })
      console.log(this.refs.inputDom)
  };

  getSonVal(e) {
      console.log(e)
      console.log(e.target)

  };


  componentDidMount(){
    console.log('mounted')
  }

  render() {
    const style = {
      color: 'red',
        background: 'grey',
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p style={style}>testing style</p>
        <div>{this.state.message}</div>
        <button onClick={() => this.setState({message:'State updated'})}>Change state</button>
        <button onClick={this.someMethod}>Change state by func</button>
        <button onClick={()=>this.someMethodWithArg('args')}>Change state with arg by func</button>
        <div>{this.computedState()}</div>
        <HelloWorld />
        <div>父组件的值：{this.state.childMsg}</div>
        <Demo msg={"I am props"} pStyle={{color:'orange',background:'grey'}} onClick={this.getSonVal.bind(this)}/>
          {this.state.todos.map((todo,index) =>
              <div key={index}>
                  {console.log(todo.title,index)}
                  {/*{
                      todo.finished ?
                          (<span>{todo.title}</span>)
                          : (<span>{todo.title + ' NOT COMPLETED'}</span>)
                  }*/}
                  {todo.finished && <span>{todo.title}</span>}
                  {!todo.finished && <span>{todo.title + ' NOT COMPLETED'}</span>}
              </div>
          )}
        <p>
            <input type="text" className="title" value={this.state.msg} onChange={()=>this.handleChange()} ref="inputDom"/>
        </p>
      </div>
    );
  }
}

export default App;
