import React from 'react'
import { Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $(".button-collapse").sideNav({
      closeOnClick: true
    });

  }
  render() {
    const user = Meteor.user()
    return (
      <div className='navbar-fixed'>
        <nav className="indigo darken-4 ">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              <img className='logo' src='cc.svg'/>
            </Link>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/" onClick={() => {
                $('html, body').animate({
                  scrollTop: $('html').offset().top
                }, 'slow');
              }}>Home</Link></li>
              <li><Link to="/" onClick={() => {
                $('html, body').animate({
                  scrollTop: $('#about').offset().top
                }, 'slow');
              }}>About</Link></li>
              {
                user ?
                  <li><a href="#" onClick={() => {
                    Meteor.logout()
                  }}>Logout</a></li> :
                  null
              }
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to="/" onClick={() => {
                $('html, body').animate({
                  scrollTop: $('html').offset().top
                }, 'slow');
              }}>Home</Link></li>
              <li><Link to="/" onClick={() => {
                $('html, body').animate({
                  scrollTop: $('#about').offset().top
                }, 'slow');
              }}>About</Link></li>
              {
                user ?
                  <li><a href="#" onClick={() => {
                    Meteor.logout()
                  }}>Logout</a></li> :
                  null
              }
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    user: Meteor.user()
  }
}, Navbar)