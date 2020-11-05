import React from 'react';
import { Grid, Button, Typography, TextField, Divider, IconButton } from "@material-ui/core";
import { Content } from '../../types';
import { withRouter, match } from "react-router";
import * as H from "history";
import moment, { Moment } from "moment";
import { makeStyles } from "@material-ui/core/styles";
import YoutubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useMediaInfoStyles = makeStyles({
    root: {
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon_button: {
        borderWidth: 2,
        borderColor: 'white',
        borderStyle: "solid",
        marginLeft: 30,
        marginRight: 30
    },
    icon: {
        borderWidth: 4,
        color: 'white'
    }
});

const mockMedias = [YoutubeIcon, FacebookIcon, TwitterIcon, InstagramIcon]

interface MediaInfoProps {
    //content: Content
}

const MediaInfo: React.FC<MediaInfoProps> = (props) => {
    //const { content } = props
    const classes = useMediaInfoStyles();
    return (
        <div className={classes.root}>
            {mockMedias.map((Icon) => (
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    className={classes.icon_button}
                    onClick={() => { }}
                >
                    <Icon fontSize="large" className={classes.icon}></Icon>
                </IconButton>
            ))}
        </div>
    );
}

// ContactInfo
const useContactInfoStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

interface ContactInfoProps {
    //content: Content
}

const ContactInfo: React.FC<ContactInfoProps> = (props) => {
    //const { content } = props
    const classes = useContactInfoStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>{"Contact Info"}</Typography>
            <Typography>{"Address"}</Typography>
            <Typography>{"California St, San Francisco, CA"}</Typography>
            <Typography>{"Phone"}</Typography>
            <Typography>{"+1 123 6076 866"}</Typography>
            <Typography>{"Email"}</Typography>
            <Typography>{"r.hrn@gmail.com"}</Typography>
        </div>
    );
}

const useMessageFormStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    form_container: {
    },
    text_field: {
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 10,
    },
    message_text_field: {
        margin: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        width: '100%'
    },
    button: {
        borderRadius: 30,
        padding: 8,
        width: 100,
        fontSize: 17,
    },
});

interface MessageFormProps {
    //content: Content
}

const MessageForm: React.FC<MessageFormProps> = (props) => {
    //const { content } = props
    const classes = useMessageFormStyles();
    return (
        <div className={classes.root}>
            <div className={classes.form_container}>
                <div>
                    <TextField className={classes.text_field} variant="outlined" label="Name" />
                    <TextField className={classes.text_field} variant="outlined" label="Email" />
                </div>
                <TextField className={classes.message_text_field} variant="outlined" multiline rows={6} label="Message" />
                <Button variant="outlined" className={classes.button}>{"送信"}</Button>
            </div>
        </div>
    );
}


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        height: '50',
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
    contact_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
});

interface Props {
    //content: Content
}

const ContactView: React.FC<Props> = (props) => {
    //const { content } = props
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>{"GET IN TOUCH"}</Typography>
            <Grid container>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <MessageForm />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <ContactInfo />
                </Grid>
                <Divider />
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <MediaInfo />
                </Grid>
            </Grid>
        </div>
    );
}

export default ContactView;