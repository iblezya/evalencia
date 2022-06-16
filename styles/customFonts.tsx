import { css, Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Evale';
        src: local(''), url('/fonts/mama.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
      `}
  />
)

export default Fonts