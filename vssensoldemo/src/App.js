import React, { Component } from 'react';
import MainBackground from './components/MainBackground/MainBackground.js'
import LogInBlock from './components/LogInBlock/LogInBlock.js'
import HomePage from './components/HomePage/HomePage.js'
import RegisterForm from './components/RegisterForm/RegisterForm.js'
import 'semantic-ui/dist/semantic.min.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
        route: '',
        isLogIn: false
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  render(){

    return(
      <div className="App">
        <MainBackground />
          {
            (
              () => {
                switch (this.state.route) {

                  case "logined":   
                  return (
                    <HomePage onRouteChange={this.onRouteChange} />
                  )

                  case "register": 
                  return (
                    <RegisterForm onRouteChange={this.onRouteChange} />
                  )

                  case "home":  
                  return (
                    <HomePage onRouteChange={this.onRouteChange} />
                  )

                  default:      
                  return (
                    <LogInBlock isLogIn={this.state.isLogIn} onRouteChange={this.onRouteChange} />
                  )
                }
              }
            )
          ()}
      </div>
    )
  }
}


export default App;
