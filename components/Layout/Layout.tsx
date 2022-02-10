// node imports
import React from 'react'

// local imports
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

type LayoutProps = {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  )
}

export default Layout
