import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { Redirect, Route } from 'react-router-dom'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  state = {isLoggedIn: false}

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        {this.state.isLoggedIn ? (
          <Component {...pageProps} />
        ) : (
          <Redirect to={{ pathname: '/login'}} />
        )}
      </Container>
    )
  }
}