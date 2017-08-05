import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import {
  Route,
  Link
} from 'react-router-dom'

import Login from './login'

class Portfolio extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { user } = this.props
    return (
    <div className='container center'>
        <h1>Portfolio</h1>
        <hr/>
        <div className="row">
          <div className="col s4">
            <img src="/bg.png" className='responsive-img'/>
          </div>
          <div className="col s8">
            <h4>Shoe Site</h4>
            <p>Shoe selling site built with bricks and cement hosted on ground</p>
            <div className='row'>
              <div className='col s6'>
                <Link to="#" className='btn btn-block indigo darken-2'>Site</Link>
              </div>
              <div className='col s6'>
                <Link to="#" className='btn btn-block amber darken-2'>Source</Link>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col s4">
            <img src="/bg.png" className='responsive-img' />
          </div>
          <div className="col s8">
            <h4>Shoe Site</h4>
            <p>Shoe selling site built with bricks and cement hosted on ground</p>
            <div className='row'>
              <div className='col s6'>
                <Link to="#" className='btn btn-block indigo darken-2'>Site</Link>
              </div>
              <div className='col s6'>
                <Link to="#" className='btn btn-block amber darken-2'>Source</Link>
              </div>
            </div>
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
}, Portfolio)