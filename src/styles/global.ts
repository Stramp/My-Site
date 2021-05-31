import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
/* poppins-300 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url('/fonts/poppins-v15-latin-300.woff2') format('woff2'), 
       url('/fonts/poppins-v15-latin-300.woff') format('woff'); 
}
/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'), 
       url('/fonts/poppins-v15-latin-regular.woff') format('woff'); 
}
/* poppins-500 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url('/fonts/poppins-v15-latin-500.woff2') format('woff2'), 
       url('/fonts/poppins-v15-latin-500.woff') format('woff'); 
}
/* poppins-700 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url('/fonts/poppins-v15-latin-700.woff2') format('woff2'), 
       url('/fonts/poppins-v15-latin-700.woff') format('woff'); 
}



*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
html {
  font-size: 62.5%;
}

${({ theme }) => css`
  body {
    font-family: ${theme.font.family};
  }
`}
`
export default GlobalStyle
