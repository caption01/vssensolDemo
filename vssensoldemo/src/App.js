import React, { Component } from 'react';
import MainBackground from './components/MainBackground/MainBackground.js'
import LogInBlock from './components/LogInBlock/LogInBlock.js'
import RegisterForm from './components/RegisterForm/RegisterForm.js'
import 'semantic-ui/dist/semantic.min.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
        route: 'login'
    }
  }

  render(){

    return(
      <div className="App">
        <MainBackground />
        {
          this.state.route === 'login'
          ? (
              <LogInBlock />
            )  
          : (
              <RegisterForm />
            )
        }
      </div>
    )

  }

}


export default App;
