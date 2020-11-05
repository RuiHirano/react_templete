import React, { useState } from 'react';
import { Grid, Button, Typography, AppBar, Toolbar, Paper, CardMedia } from "@material-ui/core";
import { Content } from '../../types';
import { withRouter, match } from "react-router";
import * as H from "history";
import moment, { Moment } from "moment";
import imgPath from "../../assets/office.jpg"
import { makeStyles } from "@material-ui/core/styles";
import FeaturesView from './features';
import ClientsView from './clients';
import PlansView from './plan';
import ContactView from './contact';

interface RouteProps {
    history: H.History;
    location: H.Location;
    match: match<{ contentId: string }>;
}

interface Props {
    //content: Content
}

interface HeaderTitleProps {
    history: H.History;
}

const useStyles = makeStyles({
    card_container: {
        height: "80vh",
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_container: {
        width: '60%'
    },
    app_name: {
        fontSize: 100,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center'
    },
    app_description: {
        fontSize: 20,
        color: "white",
        textAlign: 'center',
        whiteSpace: "pre-wrap"
    },
    button_container: {
        textAlign: 'center',
        paddingTop: 50,
    },
    button: {
        borderRadius: 30,
        padding: 15,
        width: 160,
        fontSize: 17,
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    }
});

const HeaderTitle: React.FC<HeaderTitleProps> = (props) => {
    const { history } = props;
    const classes = useStyles();

    const clickUseButton = () => {
        history.push("/sign")
    }

    return (
        <div>
            <CardMedia image={imgPath} className={classes.card_container}>
                <div className={classes.text_container}>
                    <Typography className={classes.app_name}>React Templete</Typography>
                    <Typography className={classes.app_description}>
                        {"Reactを用いたサービス開発を支援するテンプレート。\n速やかにサービスを開発しリリースしたい方はぜひ使ってみてください。"}
                    </Typography>
                    <div className={classes.button_container}>
                        <Button variant="contained" className={classes.button} disableElevation color={"primary"} onClick={clickUseButton}>使ってみる</Button>
                    </div>
                </div>
            </CardMedia>
        </div>
    );
};


const HomeView: React.FC<RouteProps & Props> = (props) => {
    const { match, history } = props
    return (
        <div>
            <HeaderTitle history={history} />
            <FeaturesView />
            <PlansView />
            <ClientsView />
            <ContactView />

        </div>
    );
}

export default HomeView;
