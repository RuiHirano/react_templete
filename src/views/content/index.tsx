import React from 'react';
import { Grid, Button, Typography, AppBar, Toolbar, Paper } from "@material-ui/core";
import { Content } from '../../types';
import { withRouter, match } from "react-router";
import * as H from "history";
import moment, { Moment } from "moment";


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
    const { match } = props
    const contentId = match.params.contentId
    const content = mockContent
    return (
        <div style={{}}>
            <div style={{ width: '100%' }}>
                <Paper style={{ width: "50%", margin: 'auto', marginTop: 100 }}>
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
        </div>
    );
}

export default ContentView;
