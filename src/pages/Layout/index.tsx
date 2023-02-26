import { Routes, Route, Link } from 'react-router-dom'
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default Layout
