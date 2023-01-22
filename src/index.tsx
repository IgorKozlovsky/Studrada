import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Layout from 'src/modules/Layout'
import reportWebVitals from 'src/utils/reportWebVitals'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Layout />
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
