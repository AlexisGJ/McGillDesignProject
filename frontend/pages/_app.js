import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { Redirect, Route } from 'react-router-dom'
import GoogleLogin from 'react-google-login';
require('dotenv').config()

import '../static/css/main_custom.css'


export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  state = {
    isLoggedIn: false,
    status: "",
  }

  responseGoogle = (response) => {
    if (response.accessToken && response.profileObj && response.profileObj.email) {
      if (response.profileObj.email == process.env.ALLOWED_EMAIL) {
        console.log("Connected !")
        this.setState({
          isLoggedIn: true,
          status: "",
        });
      } else {
        this.setState({
          status: "Ce compte n'est pas autorisé",
        })
      }
      
    } else {
      this.setState({
        status: "Erreur de connexion",
      })
    }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        {this.state.isLoggedIn ? (
          <Component {...pageProps} />
        ) : (
          <div className="loginPage">
            <h1>CAMP CAROWANIS</h1>
            <div className="googleButton">
              <GoogleLogin
                clientId="379738068740-tgguug359j7mqrm0vqledsf9si5u7ssp.apps.googleusercontent.com"
                buttonText="Connexion avec Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                />
            </div>
            <div className="status">{this.state.status}</div>
          </div>
        )}
      </Container>
    )
  }
}