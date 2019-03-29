import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { Redirect, Route } from 'react-router-dom'
import GoogleLogin from 'react-google-login';
require('dotenv').config()


export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  state = {isLoggedIn: false}

  responseGoogle = (response) => {
    if (response.accessToken && response.profileObj && response.profileObj.email && response.profileObj.email == process.env.ALLOWED_EMAIL) {
      console.log("Connected !")
      this.setState({
        isLoggedIn: true,
      });
    }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        {this.state.isLoggedIn ? (
          <Component {...pageProps} />
        ) : (
          <GoogleLogin
            clientId="379738068740-tgguug359j7mqrm0vqledsf9si5u7ssp.apps.googleusercontent.com"
            buttonText="Login to google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            />
        )}
      </Container>
    )
  }
}