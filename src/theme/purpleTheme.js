import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: "#202020",
    },
    secondary: {
      main: "#fafafa",
    },
    error: {
      main: red.A400,
    },
  },
});
