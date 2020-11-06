import React, { useContext } from 'react';
import { Grid, Button, Typography, AppBar, Toolbar, IconButton, TextField, List, ListItem, ListItemIcon, ListItemText, Paper } from "@material-ui/core";
import InboxIcon from '@material-ui/icons/Inbox';
import moment, { Moment } from "moment";
import { Content } from '../../types';
import { withRouter, match } from "react-router";
import * as H from "history";
import { makeStyles } from "@material-ui/core/styles";
import { UserAction, UserStore } from '../../store/user';

const mockContents: Content[] = [
    {
        Title: "RLLibでのfailエラー",
        Error: {
            Message: "raise TuneError(Trials did not complete, incomplete_trials)",
            Log: `Traceback (most recent call last):
      File "fx-dqn-train.py", line 253, in <module>
        results = tune.run(args.run, config=config)
      File "/Users/ruihirano/.pyenv/versions/3.7.0/lib/python3.7/site-packages/ray/tune/tune.py", line 349, in run`,
            Location: `"fx-dqn-train.py", line 253`,
        },
        Environment: {
            OS: "Mac",
            Language: "python",
        },
        Solution: "なんとかしてできるよ",
        TimeStamp: moment()
    },
    {
        Title: "Golang 構造体エラー",
        Error: {
            Message: "raise TuneError(Trials did not complete, incomplete_trials)",
            Log: `Traceback (most recent call last):`,
            Location: `"fx-dqn-train.py", line 253`,
        },
        Environment: {
            OS: "Mac",
            Language: "golang",
        },
        Solution: "なんとかしてできるよ",
        TimeStamp: moment()
    },
    {
        Title: "Rails bootstrapエラー",
        Error: {
            Message: "raise TuneError(Trials did not complete, incomplete_trials)",
            Log: `Traceback (most recent call last):`,
            Location: `"fx-dqn-train.py", line 253`,
        },
        Environment: {
            OS: "Mac",
            Language: "python",
        },
        Solution: "なんとかしてできるよ",
        TimeStamp: moment()
    },
]

const useListViewStyles = makeStyles({
    root: {
    },
    title: {
        textAlign: 'center'
    },
    paper_container: {
        marginTop: 40
    },
});

interface ContentListViewProps {
    history: H.History;
}

const ContentListView: React.FC<ContentListViewProps> = (props) => {
    const { history } = props
    const classes = useListViewStyles();
    const { state, dispatch } = useContext(UserStore);

    const clickContent = (content: Content) => {
        history.push({
            pathname: "/content/000",
        })
    }
    return (
        <div className={classes.root}>

            <Paper className={classes.paper_container}>
                <Typography variant={"h5"} className={classes.title}>{"Content一覧"}</Typography>
                <List>
                    {mockContents.map((content) => (
                        <ListItem button onClick={() => clickContent(content)}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={content.Title} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </div>
    )
}

const useUserHomeStyles = makeStyles({
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

const UserHomeView: React.FC<RouteProps & Props> = (props) => {
    const { history } = props
    const classes = useUserHomeStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xl={3} lg={3} md={3} sm={12} xs={12}></Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <ContentListView history={history} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={12} xs={12}></Grid>
            </Grid>
        </div>
    );
}

export default UserHomeView;
