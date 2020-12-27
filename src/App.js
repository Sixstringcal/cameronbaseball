import './App.css';

import Home from "./Home";

import Videos from "./Videos";
import { makeStyles } from '@material-ui/core/styles';
import NavBar from "./NavBar";
import { Route, Switch, BrowserRouter } from "react-router-dom";


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
