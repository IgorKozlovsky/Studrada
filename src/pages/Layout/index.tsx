import primaryTheme from 'src/theme/primaryTheme'
import { ThemeProvider } from 'styled-components'
import Header from 'src/pages/Layout/components/Header'
import Home from 'src/pages/Home'
import Feedback from 'src/pages/Feedback'

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={primaryTheme}>
        <Header />
        {/* <Home /> */}
        <Feedback />
      </ThemeProvider>
    </>
  )
}

export default Layout
