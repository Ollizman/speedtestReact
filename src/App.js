import React, { Component } from 'react';
import './App.css';
import Box from './components/Box';

class App extends Component {
  state = {
    score : 0
  };

  clickHandler = () => {
    this.setState({score: this.state.score + 1});
  }


  render() {
    return(
      <div className="App">
        <h1>Speedtest 2.7</h1>
        <Box click={this.clickHandler}/>
        <Box />
        <Box />
        <Box />
        <p>{this.state.score}</p>

      </div>

    )
  }
}

export default App;
