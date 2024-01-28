import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './styles/GlobalStyle.jsx'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'
import StoreCoins from './context/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreCoins>
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StoreCoins>
  </React.StrictMode>,
)
