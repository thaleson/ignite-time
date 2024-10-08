/* eslint-disable react/react-in-jsx-scope */

import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import { Router } from './Router'


import { CyclesContextProvider } from './contexts/CyclesContext'





export function App() {

  

  return (


    <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>

      <CyclesContextProvider> 
         <Router />
      </CyclesContextProvider>  
      </BrowserRouter>
      < GlobalStyle />
    </ThemeProvider>

  )

}



