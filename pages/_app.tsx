import React from 'react'
import NextApp, { Container } from 'next/app'
import Layout from 'src/components/Layout'
import GlobalStyle from 'src/settings/global.style'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}
