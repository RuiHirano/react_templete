import React from 'react';
import { Grid, Button, Typography, AppBar, Toolbar, Paper, Avatar } from "@material-ui/core";
import { Content } from '../../types';
import { withRouter, match } from "react-router";
import * as H from "history";
import moment, { Moment } from "moment";
import { makeStyles } from "@material-ui/core/styles";

interface Client {
    path: string
    title: string
    text: string
}
const mockClients: Client[] = [
    {
        "path": 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        "title": 'this is title',
        "text": 'this is description'
    },
    {
        "path": 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        "title": 'this is title',
        "text": 'this is descriptiondfas'
    },
    {
        "path": 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        "title": 'this is title',
        "text": 'this is descriptiondfas'
    },
]

const useClientContentStyles = makeStyles({
    root: {
        margin: 30,
        width: '20%',
        display: 'flex',
        flexDirection: 'row'
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'dimgray',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    paper_container: {
        margin: 'auto',
        width: '50%',
    },
    avatar: {
        width: 100,
        height: 100,
        margin: 'auto'
    },
    text_container: {
        display: 'flex',
        flexDirection: 'column'
    },
});

interface ClientContentProps {
    client: Client
}

const ClientContent: React.FC<ClientContentProps> = (props) => {
    const { client } = props
    const classes = useClientContentStyles();
    return (
        <div className={classes.root}>
            <Avatar alt="Remy Sharp" src={client.path} className={classes.avatar} />
            <div className={classes.text_container}>
                <Typography className={classes.title}>{client.title}</Typography>
                <Typography className={classes.text}>{client.text}</Typography>
            </div>
        </div>
    );
}

const useStyles = makeStyles({
    root: {
        backgroundColor: 'whitesmoke',
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold'
    },
    paper_container: {
        margin: 'auto',
        width: '50%',
    },
    clients_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
});

interface Props {
    //content: Content
}

const ClientsView: React.FC<Props> = (props) => {
    //const { content } = props
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>{"CLIENTS"}</Typography>
            <div className={classes.clients_container}>
                {mockClients.map((client) => (
                    <ClientContent client={client} />
                ))}
            </div>
        </div>
    );
}

export default ClientsView;