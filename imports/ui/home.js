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
            <h1 className='main-header white-text'>COLOR CODE</h1>
            <br/>
            {/* <a href="#" className="btn amber darken-2" onClick={() => {
              history.push('/dashboard')
            }}>Enter</a>
            */}
            <p className='main-subheader'>
              Learn to code from a community of people who are passionate about code and teaching!
            </p>
          </div>
        </div>
        <div id="about" className="row center">
        <br/><br/>
          <div className="container">
            <h3>What is ColorCode?</h3>
            <p>
              ColorCode is a place for anyone to learn how to code.
              We're not prescriptive about what people should learn, but are more keen on hearing about what
              problems people want to solve or what they want to do, and then set them on the right path to achieving those goals.
              We also want to encourage those who are under-represented in tech (i.e. women, People of Colour , LGBTQ etc) to
              participate and feel empowered.
            </p>
          </div>
        </div>
        <div className="row center">
          <div className="col s12 m4">
            <div className="container">
              <h6>Why ColorCode?</h6>
              <p>Community and consistency is important when learning to code. We provide a safe, consistent space in which people can learn how to solve problems with code,
                build websites or think about how tech can help their small business.
                </p>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="container">
              <h6>When is ColorCode?</h6>
              <p>
                We meet every second Saturday, from about 9h30 to 13h00. See our <a href="https://twitter.com/ColorCodeCT">Twitter Feed</a> for dates and reminders.
              </p>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="container">
              <h6>Who is ColorCode for?</h6>
              <p>Anyone, no matter your skill level, is welome at ColorCode. Tell us about what you want to do and we can assist in whatever way we can.</p>
            </div>
          </div>
        </div>
        <div className="row center">
          <div className="col s12 m4">
            <div className="container">
              <h6>How much is ColorCode?</h6>
              <p>It's free!</p>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="container">
              <h6>What do you need for ColorCode?</h6>
              <p>
                Your own laptop.
              </p>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="container">
              <h6>Where is ColorCode?</h6>
              <p>ColorCode is based in Cape Town. We usually meet at <a href="greenpointcoworking.co.za">Greenpoint Coworking</a>, but the venue may change from time to time</p>
            </div>
          </div>
        </div>
        <div className='row center'>
          <h1>Our Next Workshop:</h1>
          <p>Saturday the 2nd of September, at Greenpoint Coworking Space.</p>
          <br/><br/>
        </div>

        <div className='row center'>
          <h3>Some of the team...</h3>
          <br />
          <div className='col s6 m3'>
            <img src="/avatars/emma.png" className='circle responsive-img' />
            <br/>
            <b className="team-text orange-text text-darken-2">Emma</b>
            <br/>
            <i>Uber5</i>
            <br/><br/>
          </div>
          <div className='col s6 m3'>
            <img src="/avatars/nate.png" className='circle responsive-img' />
            <br/>
            <b className="team-text orange-text text-darken-2">Nathan</b>
            <br/>
            <i>Praekelt</i>
            <br/><br/>
          </div>
          <div className='col s6 m3'>
            <img src="/avatars/tar.png" className='circle responsive-img' />
            <br/>
            <b className="team-text orange-text text-darken-2">Taariq</b>
            <br/>
            <i>React Technology</i>
            <br/><br/>
          </div>
          <div className='col s6 m3'>
            <img src="/avatars/nurha.png" className='circle responsive-img' />
            <br/>
            <b className="team-text orange-text text-darken-2">Nurha</b>
            <br/>
            <i>Direct Axis</i>
            <br/><br/>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.070347793704!2d18.41540931521132!3d-33.91358898064382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc675cf65a6981%3A0xe93cabfa81eda535!2sGreenpoint+Coworking!5e0!3m2!1sen!2sza!4v1503326942057" allowFullScreen>
        </iframe>
      </div>
    )
  }
}
