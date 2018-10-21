import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    query: "",
  }
  updateQuery = (query) => {
    this.setState(() => ({
      query: query,
    }))
  }
  render() {
    return (
      <div className="App">
        
        //add header here
        
        <div className="container">
          <input 
            type="text" 
            placeholder="Say Something" 
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
          <p className="echo">Echo:</p>
          <p>{this.state.query}</p>
        </div>
      </div>
    );
  }
}

export default App;
