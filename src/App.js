import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Customers from './Components/Client/Clients';
import Home from './Components/Home/Home';
import Actions from './Components/Actions/Actions';
import Analytics from './Components/Analytics/Analytics';


class App extends Component {

  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  generateData = () => {
    setTimeout(() => {
      let data = require('./data.json')
      this.setState({
        data
      })
    }, 100)
  }


  componentDidMount() {
    this.generateData()

  }

  render() {

    return (
      <Router>
        <div className="App">

          <Link to= "/">HOME </Link>
          <Link to= "/clients">CLIENTS </Link>
          <Link to= "/actions">ACTIONS </Link>
          <Link to= "/analytics">ANALYTICS </Link>
          
      
          <Route path="/" exact render={() => <Home data={this.state.data} />} />
          <Route path="/clients" exact render={() => <Customers data={this.state.data} />} />
          <Route path="/actions" exact render={() => <Actions data={this.state.data} />} />
          <Route path="/analytics" exact render={() => <Analytics data={this.state.data} />} />

          
          
        </div>
      </Router>


    )
  }
}

export default App;
