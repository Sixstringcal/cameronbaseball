import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Home from "./Home";
import ReactDOM from 'react-dom';

import Videos from "./Videos";
import { makeStyles } from '@material-ui/core/styles';
import NavBar from "./NavBar";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Backdrop, colors } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));



const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <NavBar />

        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Home} />
          <Route path="/videos" component={Videos} />

        </Switch>
      </BrowserRouter>

    </div>

  );
}


export default App;
