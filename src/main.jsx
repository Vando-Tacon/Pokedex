import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ResetCss } from './themes/GlobalStyle.jsx'
import { ThemeProvider } from 'styled-components'
import { dark } from './themes/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <ThemeProvider theme={dark()}>
<ResetCss/>
    <App />

    </ThemeProvider>
  </StrictMode>,
)
