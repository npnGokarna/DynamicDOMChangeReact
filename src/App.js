import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ValidationComponent from './components/ValidationComponent';
import CharComponents from './components/CharComponents';

class App extends Component {


  state = {
    myWord: "",
    wordLength: 0
  };


  charCounter = (event) => {
    let myW = event.target.value;
    this.setState({
      myWord: myW,
      wordLength: myW.length
    });
  }

  deleteChar = (pIndex) =>{
    console.log(pIndex);
    let temp = [...this.state.myWord];
    temp.splice(pIndex,1);
    let x = temp.join('');
    this.setState({myWord: x, wordLength: x.length});
  }

  render() {
    return (
      <div className="App">
       <input type='text' onChange = {(event) => this.charCounter(event)}/>
         <ValidationComponent
            word = {this.state.myWord}
            wordCount = {this.state.wordLength}
          />
       {
       this.state.myWord.split('').map( (item, index) =>
       <CharComponents
       word = {item}
       click = {()=>this.deleteChar(index)}
       />
      )
       }
      </div>
    );
  }
}

export default App;
