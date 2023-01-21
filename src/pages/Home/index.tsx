import primaryTheme from 'src/theme/primaryTheme'
import { ThemeProvider } from 'styled-components'

function Home() {
  return (
    <ThemeProvider theme={primaryTheme}>
      <div className="App"></div>
    </ThemeProvider>
  )
}

export default Home
