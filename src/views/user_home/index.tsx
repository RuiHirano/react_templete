import React, { useContext } from 'react';
import { Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Paper } from "@material-ui/core";
import InboxIcon from '@material-ui/icons/Inbox';
import moment from "moment";
import { Item } from '../../types';
import { match } from "react-router";
import * as H from "history";
import { makeStyles } from "@material-ui/core/styles";
import { UserStore } from '../../store/user';

const mockItems: Item[] = [
    {
        ID: "test",
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
        ID: "test",
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
        ID: "test",
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

interface ItemListViewProps {
    history: H.History;
}

const ItemListView: React.FC<ItemListViewProps> = (props) => {
    const { history } = props
    const classes = useListViewStyles();
    const { state, dispatch } = useContext(UserStore);

    const clickItem = (item: Item) => {
        history.push({
            pathname: "/item/000",
        })
    }
    return (
        <div className={classes.root}>

            <Paper className={classes.paper_container}>
                <Typography variant={"h5"} className={classes.title}>{"Item一覧"}</Typography>
                <List>
                    {mockItems.map((item) => (
                        <ListItem button onClick={() => clickItem(item)}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={item.Title} />
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
                    <ItemListView history={history} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={12} xs={12}></Grid>
            </Grid>
        </div>
    );
}

export default UserHomeView;
