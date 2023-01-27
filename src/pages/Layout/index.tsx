import React from 'react'
import primaryTheme from 'src/theme/primaryTheme'
import { ThemeProvider } from 'styled-components'
import Header from 'src/pages/Layout/components/Header'
import Home from 'src/pages/Home'

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={primaryTheme}>
        <Header />
        <Home />
      </ThemeProvider>
    </>
  )
}

export default Layout
