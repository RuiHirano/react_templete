import React from 'react';
import { Grid, Button, Typography, AppBar, Toolbar, IconButton, TextField, List, ListItem, ListItemIcon, ListItemText, Paper } from "@material-ui/core";
import InboxIcon from '@material-ui/icons/Inbox';
import moment, { Moment } from "moment";
import { Content } from '../../types';
import { withRouter, match } from "react-router";
import * as H from "history";
import { makeStyles } from "@material-ui/core/styles";


const useSecurityViewStyles = makeStyles({
    root: {
        backgroundColor: 'white_smoke',
        height: '94vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    paper_container: {
        padding: 20
    },
    form_container: {
        display: 'flex',
        alignItems: 'start',
        flexDirection: 'column'
    },
    password_container: {
        width: '50%',
        marginTop: 30
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    sub_title: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
    text_field: {
        width: '80%'
    },
    text_field_title: {
        fontSize: 13,
        color: 'dimgray',
        fontWeight: 'bold'
    },
    text_field_container: {
        margin: 5,
        width: '100%'
    },
    button: {
        margin: 10
    },
});

interface RouteProps {
    history: H.History;
    location: H.Location;
    match: match<{ userId: string }>;
}

interface Props {
}

const SecurityView: React.FC<RouteProps & Props> = (props) => {
    const { history } = props
    const classes = useSecurityViewStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>Security</Typography>
            <div className={classes.password_container}>
                <Typography className={classes.sub_title}>{"パスワードを変更する"}</Typography>
                <Paper className={classes.paper_container}>
                    <div className={classes.form_container}>
                        <div className={classes.text_field_container}>
                            <Typography className={classes.text_field_title} >{"現在のパスワード"}</Typography>
                            <TextField variant="outlined" className={classes.text_field} margin="dense" placeholder="現在のパスワードを入力してください" />
                        </div>
                        <div className={classes.text_field_container}>
                            <Typography className={classes.text_field_title} >{"新しいパスワード"}</Typography>
                            <TextField variant="outlined" className={classes.text_field} margin="dense" placeholder="新しいパスワードを入力してください" />
                        </div>
                        <Button variant="contained" className={classes.button} >{"変更を保存"}</Button>
                    </div>
                </Paper>
            </div>
        </div>
    );
}

export default withRouter(SecurityView);
