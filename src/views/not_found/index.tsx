import React from 'react';
import { Typography } from "@material-ui/core";
import { match } from "react-router";
import * as H from "history";
import { makeStyles } from "@material-ui/core/styles";

const useNotFoundStyles = makeStyles({
    root: {
        backgroundColor: 'gainsboro',
        height: '94vh',
    },
});

interface RouteProps {
    history: H.History;
    location: H.Location;
    match: match<{ userId: string }>;
}

interface Props {
}

const NotFoundView: React.FC<RouteProps & Props> = (props) => {
    const { history } = props
    const classes = useNotFoundStyles();
    return (
        <div className={classes.root}>
            <Typography>NotFound</Typography>
        </div>
    );
}

export default NotFoundView;
