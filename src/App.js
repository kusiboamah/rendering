import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { 
    arr : ['bmw', 'masarati', 'ford', 'benz', 'audi']

  }
  render() { 
    // const arrayItem = this.state.arr.map(arrayItem => <li>{arrayItem}</li>)
    return ( 
      <div>
        <h3>Cars</h3>
        <span>{this.state.arr.map(item => <li>{item}</li>)}</span>
      </div>
     );
  }
}
 

export default App;



