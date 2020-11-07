import React from 'react';
import { Typography, Paper } from "@material-ui/core";
import { Item } from '../../types';
import { match } from "react-router";
import * as H from "history";
import moment, { Moment } from "moment";
import { makeStyles } from "@material-ui/core/styles";


const mockItem: Item =
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
    match: match<{ itemId: string }>;
}

interface Props {
    //item: Item
}

const ItemView: React.FC<RouteProps & Props> = (props) => {
    //const { item } = props
    const classes = useStyles();
    const { match } = props
    const itemId = match.params.itemId
    const item = mockItem
    return (
        <div className={classes.root}>
            <Paper className={classes.paper_container}>
                <Typography variant={"h5"} className={classes.title}>{"Item"}</Typography>
                <Typography>{item.Title}</Typography>
                <Typography>{"エラーメッセージ"}</Typography>
                <Typography>{item.Error.Message}</Typography>
                <Typography>{"エラーログ"}</Typography>
                <Typography>{item.Error.Log}</Typography>
                <Typography>{"実行環境"}</Typography>
                <Typography>{item.Environment.OS}</Typography>
                <Typography>{item.Environment.Language}</Typography>
                <Typography>{"解決方法"}</Typography>
                <Typography>{item.Solution}</Typography>
            </Paper>
        </div>
    );
}

export default ItemView;
