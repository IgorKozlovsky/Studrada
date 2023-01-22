import React from 'react'
import primaryTheme from 'src/theme/primaryTheme'
import { ThemeProvider } from 'styled-components'
import Header from 'src/modules/Layout/components/Header'

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={primaryTheme}>
        <Header />
      </ThemeProvider>
    </>
  )
}

export default Layout
