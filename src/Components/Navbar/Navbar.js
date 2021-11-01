import React from "react";
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import useAuth from './../Hooks/useAuth';
import { Button } from "@mui/material";




const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(30),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginRight: theme.spacing(3),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { user, signout } = useAuth()

    return (
        <AppBar position="sticky">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    TourismWindow

                </Typography>


                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className={classes.navlinks}>
                        <HashLink to="/#home" className={classes.link}>
                            Home
                        </HashLink>
                        <HashLink to="/home#destination" id='focus' className={classes.link}>
                            Destination
                        </HashLink>
                        <HashLink to="/home#packeges" className={classes.link}>
                            Packeges
                        </HashLink>
                        <HashLink to="/home#gallary" className={classes.link}>
                            Gallary
                        </HashLink>
                            <HashLink to="//addPackeges" className={classes.link}>
                            Add Packeges
                        </HashLink>

                        {
                            user.email ? <Link to="/myTrips" className={classes.link}>
                                My Trips
                            </Link> :
                                ''



                        }
                        {
                            user.email ? <Button sx={{ color: "white" }}  >
                                {user.displayName.toUpperCase().slice(0, 6)}
                            </Button>
                                :
                                <Link to="/login" className={classes.link}>
                                    Log in
                                </Link>
                        }
                        {
                            user?.email ? <Button sx={{ color: "white" }} onClick={signout}   >
                                Log out
                            </Button>
                                :
                                ''
                        }

                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
