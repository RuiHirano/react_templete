import React, { useState } from "react";
import { AppBar, Toolbar, Typography, useMediaQuery } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import theme from "../../styles/theme";

const drawerWidth = 260;

interface Props {
    className?: string;
    children?: any;
    title: string
}

const MainLayout: React.FC<Props> = props => {
    const { children, title } = props;

    return (
        <div style={{ width: "100%", height: '100vh', backgroundColor: 'red' }}>
            <AppBar position="static" >
                <Toolbar>
                    {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
  </IconButton>*/}
                    <Typography variant="h6">
                        Baku
                </Typography>
                </Toolbar>
            </AppBar>
            {children}
        </div>
    );
};

export default MainLayout;
