import React from "react";
import ReactDOM from "react-rom";
import Root from "./components/Root";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById("root")
);
