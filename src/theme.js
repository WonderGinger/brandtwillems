import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: blueGrey[800],
      light: '#62727b',
      dark: '#102027',
      contrastText: '#ffffff'
    },
    secondary: {
      main: pink[500],
      light: '#f8bbd0',
      dark: '#560027',
      contrastText: '#ffffff'
    },
    header: {
      default: blueGrey[900]
    }
  },
  breakpoints: {
    standard: "lg"
  }
})

export default theme;