import React, { useState } from 'react';
import { Grid, Button, Typography, AppBar, Toolbar, Paper, CardMedia } from "@material-ui/core";
import { Content } from '../../types';
import { withRouter, match } from "react-router";
import * as H from "history";
import moment, { Moment } from "moment";
import imgPath from "../../assets/office.jpg"
import { makeStyles } from "@material-ui/core/styles";

interface RouteProps {
    history: H.History;
    location: H.Location;
    match: match<{ contentId: string }>;
}

interface Props {
    //content: Content
}

interface FeatureLayoutProps {
    isRight: boolean;
    title: string;
    text: string;
    imgPath: string;
}

const FeatureLayout: React.FC<FeatureLayoutProps> = props => {
    const { isRight, title, text, imgPath } = props;
    if (isRight) {
        return (
            <Grid container spacing={3}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Typography >{title}</Typography>
                    <Typography variant="subtitle1">{text}</Typography>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <img alt="image" src={imgPath} />
                </Grid>
            </Grid>
        );
    } else {
        return (
            <Grid container>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <img alt="image" src={imgPath} />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Typography >{Typography}</Typography>
                    <Typography variant="subtitle1">{text}</Typography>
                </Grid>
            </Grid>
        );
    }
};

interface HeaderTitleProps {
}

const useDrawerStyles = makeStyles({
    app_name: {
        fontSize: 100,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center'
    },
    app_description: {
        fontSize: 20,
        color: "white",
        textAlign: 'center'
    },
    button_container: {
        flex: 'display',
        alignItems: 'center',
        flexDirection: 'column'
    },
    button: {
    }
});

const HeaderTitle: React.FC<HeaderTitleProps> = (props) => {
    const classes = useDrawerStyles();

    return (
        <div>
            <CardMedia image={imgPath} style={{ height: "80vh", }}>
                <div style={{ paddingTop: 200 }}>
                    <Typography className={classes.app_name}>React Templete</Typography>
                    <Typography className={classes.app_description}>
                        Reactを用いたサービス開発を支援するテンプレート。速やかにサービスを開発しリリースしたい方はぜひ使ってみてください。
                    </Typography>
                    <div className={classes.button_container}>
                        <Button variant="contained" className={classes.button}>使ってみる</Button>
                    </div>
                </div>
            </CardMedia>
        </div>
    );
};

const HomeView: React.FC<RouteProps & Props> = (props) => {
    const { match } = props
    return (
        <div>
            <HeaderTitle />
            <FeatureLayout
                isRight={true}
                title={"カレンダーで取引を\n振り返る"}
                imgPath={imgPath}
                text={
                    "日毎の損益を一目で確認できます。取引の動機が一覧になっているため、なぜそのタイミングで取引をしたのかを簡単に振り返ることができます。"
                }
            />

        </div>
    );
}

export default HomeView;
