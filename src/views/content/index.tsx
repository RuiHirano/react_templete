import React from 'react';
import { Grid, Button, Typography, AppBar, Toolbar, Paper } from "@material-ui/core";
import { Content } from '../../types';
import { withRouter, match } from "react-router";
import * as H from "history";
import moment, { Moment } from "moment";
import { makeStyles } from "@material-ui/core/styles";


const mockContent: Content =
{
    Title: "Rails bootstrapエラー",
    Error: {
        Message: "raise TuneError(Trials did not complete, incomplete_trials)",
        Log: `Traceback (most recent call last):`,
        Location: `"fx-dqn-train.py", line 253`,
    },
    Solution: "なんとかしてできるよ",
    Environment: {
        OS: "Mac",
        Language: "python",
    },
    TimeStamp: moment()
}

const useStyles = makeStyles({
    root: {
        backgroundColor: 'gainsboro',
        height: '94vh',
    },
    title: {
        textAlign: 'center'
    },
    paper_container: {
        margin: 'auto',
        width: '50%',
    },
});

interface RouteProps {
    history: H.History;
    location: H.Location;
    match: match<{ contentId: string }>;
}

interface Props {
    //content: Content
}

const ContentView: React.FC<RouteProps & Props> = (props) => {
    //const { content } = props
    const classes = useStyles();
    const { match } = props
    const contentId = match.params.contentId
    const content = mockContent
    return (
        <div className={classes.root}>
            <Paper className={classes.paper_container}>
                <Typography variant={"h5"} className={classes.title}>{"Content"}</Typography>
                <Typography>{content.Title}</Typography>
                <Typography>{"エラーメッセージ"}</Typography>
                <Typography>{content.Error.Message}</Typography>
                <Typography>{"エラーログ"}</Typography>
                <Typography>{content.Error.Log}</Typography>
                <Typography>{"実行環境"}</Typography>
                <Typography>{content.Environment.OS}</Typography>
                <Typography>{content.Environment.Language}</Typography>
                <Typography>{"解決方法"}</Typography>
                <Typography>{content.Solution}</Typography>
            </Paper>
        </div>
    );
}

export default ContentView;
