import { AppBar, Drawer, IconButton, ListItem, Toolbar, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
export function Navbar() {
    const[drawerOpen , setDrawerOpen] = useState(false);
    const Theme=useTheme();
    const isMobile = Theme.breakpoints.down("sm");
    const toggleDrawer = (open:boolean) => setDrawerOpen(open);
    const closeDrawer = () => setDrawerOpen(false);
    const openDrawer = () => setDrawerOpen(true);

    const menuItems = (
       <div>
            <NavLink to="/"  onClick={closeDrawer}>
                <IconButton>
                    <Typography>
                        Home
                    </Typography>
                </IconButton>
            </NavLink>
            <NavLink to="/List" onClick={closeDrawer}>
                <IconButton>
                    <Typography>
                        List
                    </Typography>
                </IconButton>
            </NavLink>
        </div>
    );
    return (
        <>
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow:1}}>
                    Magdy's Clock
                </Typography>
                {isMobile ? (
                    <>
                    <IconButton onClick={openDrawer}>
                        <FaHamburger />
                    </IconButton>
                    <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
                    <ListItem>{menuItems}</ListItem>
                    </Drawer>
                    </>
                ):(
                    <div>
                        {menuItems}
                    </div>
                )}
            </Toolbar>
        </AppBar>
        
        </>
    );
    }