import { css, createGlobalStyle } from 'styled-components'
import theme from './theme'

const styles = css`
  :root {
    --primary: ${theme.primary};
  }
  body {
    background-image: linear-gradient(to right top, #eeeeee, #eee9ed, #f2e3e6, #f4dfda, #eeddcc);
  }
`

export default createGlobalStyle`
${styles}
`
