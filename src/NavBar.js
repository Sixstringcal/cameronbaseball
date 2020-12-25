import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    {/*<MenuIcon />*/}
                </IconButton>
                <Typography>
                    <Link to="/">
                        Home
                       </Link>
                </Typography>

                <nav className="menuButton">
                    <Typography>
                        <Link to="/videos">Videos</Link>
                    </Typography>
                </nav>
                <nav className="menuButton">
                    <Typography>
                        <a href="https://www.perfectgame.org/Players/Playerprofile.aspx?ID=777400" target="_blank" rel="noopener noreferrer">Perfect Game</a>
                    </Typography>
                </nav>
            </Toolbar>
        </AppBar>
    )
};
export default NavBar;