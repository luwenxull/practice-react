import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import lodable from './components/Loadable'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './Menu'

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              PRACTICE REACT
            </Typography>
          </Toolbar>
        </AppBar>
        <Menu></Menu>
        <Route
          path="/code-split"
          component={lodable(() => import('./pages/code-split/Demo'))}
        />
        <Route
          path="/context"
          component={lodable(() => import('./pages/context/Demo'))}
        />
        <Route
          path="/error-boundries"
          component={lodable(() => import('./pages/error-boundries/Demo'))}
        />
        <Route
          path="/ref-dom"
          component={lodable(() => import('./pages/ref-dom/Demo'))}
        />
      </Router>
    );
  }
}

export default App;
