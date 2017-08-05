import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: null,
      user: {
        email: "",
        password: "",
        fullName: ""
      },
      signup: false
    }
  }

  render() {
    const { history } = this.props
    return (
      <div id="home">
        <div className='main'>
          <div className="container center">
            <h1 className='main-header white-text'>WE ARE COLOR CODE</h1>
            <br/>
            <a href="#" className="btn amber darken-2" onClick={() => {
              history.push('/dashboard')
            }}>Enter</a>
            <p className='main-subheader'>
              Learn to code <br /><span className="hide-on-med-and-down">from a community of people who are passionate about code and teaching!</span>
            </p>
          </div>
        </div>
        <div id="about" className="row center">
        <br/><br/>
          <div className="container">
            <h3>Who we are...</h3>
            <p>
              We are a bunch of diverse humanoid creatures who realised the positive impact technology can have on our reality as a whole
                    and we wish to empower the next generation of innovators, creators and artists to build a better world for all.
                  </p>
          </div>
        </div>
        <div className="row center">
          <div className="col s12 m4">
            <div className="container">
              <h6>Level 1</h6>
              <p>HTML, CSS blah blah just a placeholderblah blah just a placeholder blah blah just a placeholder</p>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="container">
              <h6>Level 2</h6>
              <p>NodeJS, React blah blah just a placeholder blah blah just a placeholder blah blah just a placeholder</p>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="container">
              <h6>Level 3</h6>
              <p>AI, VR, AR and other strange abbreviations people use for new tech blah blah just a placeholder</p>
            </div>
          </div>
        </div>
        <div className='row center'>
          <h3>Some of the stuff you can learn...</h3>
          <br />
          <div className='col s6 m3 tech-logo-container'>
            <img src="/nodejs-icon.svg" className='tech-logo' />
          </div>
          <div className='col s6 m3 tech-logo-container'>
            <img src="/meteor-icon.svg" className='tech-logo' />
          </div>
          <div className='col s6 m3 tech-logo-container'>
            <img src="/react.svg" className='tech-logo' />
          </div>
          <div className='col s6 m3 tech-logo-container'>
            <img src="/mongodb.png" className='tech-logo' />
          </div>
        </div>
        <div id="overlay" className="overlay" onClick={() => {
          document.getElementById('overlay').style.pointerEvents = 'none'
        }}></div>
        <iframe
          width="600"
          height="450"
          scrolling="no"
          frameBorder="0" style={{
            border: 0,
            width: '100%',
            display: 'inline-block',
            position: 'relative'
          }}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCuJIM07mVc2Ytg9DJ6z2HZskF_oqTfDtk&q=greenpoint+co+working+space+cape+town" allowFullScreen>
        </iframe>
      </div> 
    )
  }
}