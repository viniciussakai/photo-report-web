import { createGlobalStyle } from 'styled-components'
import theme from 'config/theme'

const globalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html, body,#root{
    height:100vh;
    width:100vw;
  }

  body{
    font-family:'Roboto',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color:${theme.bodyBackground}
  }
`

export default globalStyle
