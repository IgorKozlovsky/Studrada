import React from 'react'
import primaryTheme from 'src/theme/primaryTheme'
import { ThemeProvider } from 'styled-components'
import Header from 'src/modules/Layout/components/Header'
import Banner from 'src/components/Banner/index'
import ArticleInfo from './components/ArticleIndo/ArticleInfo'

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={primaryTheme}>
        <Header />
        <Banner />
        <ArticleInfo />
      </ThemeProvider>
    </>
  )
}

export default Layout
