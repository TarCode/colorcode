import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: "",
        password: "",
        fullName: ""
      },
      signup: false
    }
  }

  render() {

    return (
      <div>
        {
          !this.state.loggedInUser ?
            <div className='container center'>
              {
                this.state.signup ?
                <div className="row center">
                  <h2>Signup to Colorcode</h2>
                </div> :
                <div className="row center">
                  <h2>Login to Colorcode</h2>
                </div>
              }
              {
                this.state.signup ?
                  <input placeholder="Enter Full Name..." onChange={e => {
                    this.state.user.fullName = e.target.value
                    this.setState(this.state)
                  }} type='text' name='fullName' value={this.state.user.fullName} /> :
                  null
              }
              <input placeholder="Enter Email..." onChange={e => {
                this.state.user.email = e.target.value
                this.setState(this.state)
              }} type='email' name='email' value={this.state.user.email} />
              <input placeholder="Enter Password..." onChange={e => {
                this.state.user.password = e.target.value
                this.setState(this.state)
              }} type="password" name="password" value={this.state.user.password} />
              {
                this.state.signup ?
                  <div>
                    <a onClick={() => {
                      if (!this.state.user.fullName || this.state.user.fullName.length < 1) {
                        swal({
                          type: "error",
                          title: "Error!",
                          text: "Must specify a name"
                        })
                      } else {
                        Accounts.createUser(
                          {
                            profile: {
                              name: this.state.user.fullName
                            },
                            email: this.state.user.email,
                            password: this.state.user.password
                          },
                          function (error) {
                            if (error) {
                              swal({
                                type: "error",
                                title: "Error!",
                                text: error.reason
                              })
                            } else {
                              this.state.signup = false
                              this.setState(this.state)
                              swal({
                                type: "success",
                                title: "Success!",
                                text: "User Created"
                              })
                              Meteor.loginWithPassword(this.state.user.email, this.state.user.password, function (error) {
                                if (error) {
                                  swal({
                                    type: "error",
                                    title: "Error!",
                                    text: error.reason
                                  })
                                } else {
                                  swal({
                                    type: "success",
                                    title: "Success!",
                                    text: "Logged In"
                                  })
                                }
                              }.bind(this));
                            };
                          }.bind(this)
                        );
                      }

                    }} className='btn btn-block amber darken-2'>Signup</a>
                    <br />
                    <a href="#" onClick={() => {
                      this.state.signup = !this.state.signup
                      this.setState(this.state)
                    }}>I already have an account</a>
                  </div> :
                  <div>
                    <a onClick={() => {

                      Meteor.loginWithPassword(this.state.user.email, this.state.user.password, function (error) {
                        if (error) {
                          swal({
                            type: "error",
                            title: "Error!",
                            text: error.reason
                          })
                        } else {
                          this.state.loggedInUser = Meteor.user()
                          this.setState(this.state)
                          swal({
                            type: "success",
                            title: "Success!",
                            text: "Logged In"
                          })
                        }
                      }.bind(this));
                    }} className='btn btn-block amber darken-2'>Login</a>
                    <br/>
                    <a href="#" onClick={() => {
                      if(this.state.email.length < 3) {
                        swal({
                          type: "warning",
                          title: "Warning",
                          text: "Please enter a valid email address"
                        })
                      } else {
                        Meteor.call("passwordForgot", this.state.email, (err, result) => {
                          if (err) {
                            swal({
                              type: 'error',
                              title: "Error",
                              text: err
                            })

                          }
                          swal({
                            type: 'success',
                            title: "Success",
                            text: "Password reset link sent"
                          })
                        })
                      }
                    }}>Forgot Password?</a>
                    <br />
                    <a href="#" onClick={() => {
                      this.state.signup = !this.state.signup
                      this.setState(this.state)
                    }}>Create Account</a>
                  </div>
              }
            </div> :
            null
        }
      </div>
    )
  }
}