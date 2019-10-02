import React, { Component } from 'react';
import MainBackground from './components/MainBackground/MainBackground.js'
import LogInBlock from './components/LogInBlock/LogInBlock.js'
import 'semantic-ui/dist/semantic.min.css';

class App extends Component {


  render(){
    return(
      <div className="App">
        <MainBackground />
        <LogInBlock />
      </div>
    )
  }

}


export default App;
