import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import * as H from "history";
import { withRouter, match } from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        color: 'black'
    },
    blank: {
        flexGrow: 1
    },
    login_button: {
        color: 'black'
    },
    app_bar: {
        backgroundColor: 'white'
    },
}));

interface HomeAppBarProps {
    history: H.History;
}

const HomeAppBar: React.FC<HomeAppBarProps> = (props) => {
    const { history } = props;
    const classes = useStyles();

    const clickUseButton = () => {
        history.push("/signin")
    }

    const toHome = () => {
        history.push("/")
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.app_bar}>
                <Toolbar>
                    <Button onClick={toHome}>
                        <Typography variant="h6" className={classes.title}>{"React Templete"}</Typography>
                    </Button>
                    <div className={classes.blank}></div>
                    <Button color="inherit" className={classes.login_button} onClick={clickUseButton}>{"Login"}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

interface Props {
    className?: string;
    children?: any;
    title: string
}

interface RouteProps {
    history: H.History;
    location: H.Location;
    match: match<{ contentId: string }>;
}

const HomeLayout: React.FC<Props & RouteProps> = props => {
    const { children, title, history } = props;

    return (
        <div>
            <HomeAppBar history={history} />
            {children}
        </div>
    );
};

export default withRouter(HomeLayout);
