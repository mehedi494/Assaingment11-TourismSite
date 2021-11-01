import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import {
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
} from "@material-ui/core";


import MenuIcon from "@material-ui/icons/Menu";
import useAuth from './../Hooks/useAuth';

const useStyles = makeStyles(() => ({
    HashLink: {
        textDecoration: "none",
        color: "blue",
        fontSize: "20px",
    },
    icon: {
        color: "white"
    }
}));

function DrawerComponent() {
    const { user,signout } = useAuth();
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                
            >
                <Divider />
                <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemText>
                        {
                            user.email ? <Button sx={{ color: "white" }}  >
                                {user.displayName.toUpperCase()}
                            </Button>
                                :
                                <HashLink to="/login" className={classes.HashLink}>
                                    Log in
                                </HashLink>
                        }
                    </ListItemText>
                </ListItem>
                <Divider />
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <HashLink to="/" className={classes.HashLink}>Home</HashLink>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <HashLink to="/home#packeges" className={classes.HashLink}>Packeges</HashLink>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <HashLink to="/home#gallary" className={classes.HashLink}>
                                Gallary
                            </HashLink>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <HashLink to="/home#destination" className={classes.HashLink}>
                                Destination
                            </HashLink>
                        </ListItemText>
                        <ListItemText>
                            <HashLink to="/addPackeges" className={classes.HashLink}>
                                Add packeges
                            </HashLink>
                        </ListItemText>
                    </ListItem>
                    <Divider />

                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            {
                                user.email ? <HashLink to="/myTrips" className={classes.HashLink}>
                                    My Trips
                                </HashLink> :
                                    ''



                            }
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    {
                        user?.email ? <Button sx={{ color: "white" }} onClick={signout}   >
                            Log out
                        </Button>
                            :
                            ''
                    }<Divider/>
                    {/* <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            {
                                user.email ? <Button sx={{ color: "white" }}  >
                                    {user.displayName.toUpperCase()}
                                </Button>
                                    :
                                    <HashLink to="/login" className={classes.HashLink}>
                                        Log in
                                    </HashLink>
                            }
                        </ListItemText>
                    </ListItem>
                    <Divider /> */}
                    {/* <Divider>
                        {
                            user.email ? <HashLink to="/myTrips" className={classes.HashLink}>
                                My Trips
                            </HashLink> :
                                ''



                        }</Divider>
                        <Divider>{
                            user.email ? <Button sx={{ color: "white" }}  >
                                {user.displayName.toUpperCase()}
                            </Button>
                                :
                                <HashLink to="/login" className={classes.HashLink}>
                                    Log in
                                </HashLink>
                        }</Divider>
                        <Divider>{
                            user?.email ? <Button sx={{ color: "white" }} onClick={signout}   >
                                Log out
                            </Button>
                                :
                                ''
                        }</Divider> */}
                    
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
                <MenuIcon />
            </IconButton>
        </>
    );
}
export default DrawerComponent;
