import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme(
  {
    colors: {
      primary: "#FED7D7",
      secundary:"#e9d8fd",
      out: {
        main: "#F56565",
        100: "#FED7E2",
      }
    },
    fonts: {
      logo :'Evale'
    },
  },
)

export default theme;