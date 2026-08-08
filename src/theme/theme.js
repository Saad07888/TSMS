import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1565C0",
    },
    secondary: {
      main: "#00ACC1",
    },
    success: {
      main: "#2E7D32",
    },
    warning: {
      main: "#F57C00",
    },
    error: {
      main: "#D32F2F",
    },
    background: {
      default: "#F5F7FA",
      paper: "#FFFFFF",
    },
  },

  typography: {
    fontFamily: "Inter, Roboto, Arial, sans-serif",

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 600,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;