import React from 'react'
import logo from './logo.svg'
import './App.css'
import MyStoreCheckout from './MyStoreCheckout'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Landing'
class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/subscribe' component={MyStoreCheckout} />
          <Route exact path='/' component={Landing} />
        </Switch>
      </Router>
    )
  }
}
// ;<MyStoreCheckout />

export default App
