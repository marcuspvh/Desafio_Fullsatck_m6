import { createGlobalStyle } from "styled-components";


const Global = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: #000000;;
  width: 100%;
  height: 100%;

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
@media (min-width: 320px) {
  body{
    width: 100%;
    flex-wrap: wrap;
      }
}
`
export default Global