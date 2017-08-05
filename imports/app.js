import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import Navbar from './ui/navbar'
import Home from './ui/home'
import Footer from './ui/footer'
import Dashboard from './ui/dashboard'
import Portfolio from './ui/portfolio'
import Login from './ui/login'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { user } = this.props
    return (
        <Router>
            <div>
              {
                user || user === undefined ?
                  (
                    user === undefined ?
                      <p>Loading...</p> :
                      <div className='grey lighten-4'>
                        <Navbar />
                        <main>
                          <Route exact path="/" component={Home} />
                          <Route exact path="/dashboard" component={Dashboard} />
                          <Route exact path="/portfolio" component={Portfolio} />
                        </main>
                        <Footer />
                      </div>
                  )
                  : (
                    <div>
                      <Navbar />
                      <main>
                        <Route exact path="/dashboard" component={Login} />
                        <Route exact path="/portfolio" component={Login} />
                        <Route exact path="/" component={Home} />
                      </main>
                      <Footer />
                    </div>
                  )
              }
            </div>
        </Router>
    )
  }
}

export default createContainer(() => {
  const user = Meteor.user()

  return {
    user
  }
}, App)