import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

interface Props {
    className?: string;
    children?: any;
    title: string
}

const HomeAppBar: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>{"React Templete"}</Typography>
                    <Button color="inherit">{"Login"}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const HomeLayout: React.FC<Props> = props => {
    const { children, title } = props;

    return (
        <div>
            <HomeAppBar />
            {children}
        </div>
    );
};

export default HomeLayout;
