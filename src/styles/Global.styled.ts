import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";



export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscatle;
  line-height:1.2;
}

a {
  text-decoration:none;
  color:${theme.colors.text};
}

ul {
  list-style:none;
}

button{
  background-color: unset;
  border:none;
  cursor: pointer;
  color: ${theme.colors.text};
}

section + section{
  padding:100px 0;
}

section:nth-of-type(even){
  background-color: ${theme.colors.secondaryBg};
} 
section:nth-child(odd){
  background-color: ${theme.colors.primaryBg};
} 

h3 {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    color:${theme.colors.text};
}

p {
  font-family: 'Poppins', sans-serif;
font-size: 14px;
font-weight: 300;
line-height:1.4;
color:${theme.colors.text};
}
`
