import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    /* wireframe */
    outline: 2px solid blue; 
  }

  html {
    // defines what 1 rem is
    //62.5/100*16 = 10px
    font-size: 62.5%
  } 

  body {
    box-sizing: border-box;
    font-size: 1.6rem;
  }
`

const URI = 'http://localhost:5000'

export {
  URI,
  GlobalStyle
}