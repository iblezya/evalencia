import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme(
  {
    colors: {
      primary: "#FED7D7",
      secundary:"#e9d8fd",
      out: {
        main: "#F56565",
        // 50: "#e3f2fd",
        100: "#FED7E2",
        // 200: "#90caf9",
        // 300: "#64b5f6",
        // 400: "#42a5f5",
        // 500: "#2196f3",
        // 600: "#1e88e5",
        // 700: "#1976d2",
        // 800: "#1565c0",
        // 900: "#0d47a1"
      }
    },
    fonts: {
      ev: `'Fleur De Leah', sans-serif`,
      alencia: `'Mama', sans-serif`,
    },
  },
)

export default theme