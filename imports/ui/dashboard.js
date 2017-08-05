import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import {
  Route,
  Link
} from 'react-router-dom'

import Login from './login'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { user } = this.props
    return (
    <div className='center container'>
        <h1>Dashboard</h1>
        <hr/>
        <p>Hello <b>{user.profile.name}</b> </p> 
        <p>This is your dashboard where 
            you keep track of everything you do at ColorCode.
            Its under construction for now.
        </p>
        <div className='row'>
          <div className='col s6'>
            <Link to="/lessons" className="btn btn-block amber darken-2">Lessons</Link>
          </div>
          <div className='col s6'>
            <Link to="/portfolio" className="btn btn-block amber darken-2">Portfolio</Link>
          </div>
        </div>
        <div className='row'>
          <div className='col s6'>
            <Link to="/lessons" className="btn btn-block amber darken-2">Resources</Link>
          </div>
          <div className='col s6'>
            <Link to="/portfolio" className="btn btn-block amber darken-2">Notes</Link>
          </div>
        </div>
        <div className='row'>
          <div className='col s12'>
            <Link to="/settings" className="btn btn-block amber darken-2">Settings</Link>
          </div>
        </div>
    </div>
    )
  }
}


export default createContainer(() => {
  const user = Meteor.user()

  return {
    user
  }
}, Dashboard)