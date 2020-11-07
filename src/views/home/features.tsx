import React from 'react';
import { Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Feature {
    path: string
    title: string
    text: string
}
const mockFeatures: Feature[] = [
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
    {
        "path": 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        "title": 'this is title',
        "text": 'this is descriptiondfas'
    }
]

const useFeatureContentStyles = makeStyles({
    root: {
        margin: 30,
        width: '15%'
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
});

interface FeatureContentProps {
    feature: Feature
}

const FeatureContent: React.FC<FeatureContentProps> = (props) => {
    const { feature } = props
    const classes = useFeatureContentStyles();
    return (
        <div className={classes.root}>
            <Avatar alt="Remy Sharp" src={feature.path} className={classes.avatar} />
            <Typography className={classes.title}>{feature.title}</Typography>
            <Typography className={classes.text}>{feature.text}</Typography>
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
    features_container: {
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

const FeaturesView: React.FC<Props> = (props) => {
    //const { content } = props
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>{"FEATURES"}</Typography>
            <div className={classes.features_container}>
                {mockFeatures.map((feature) => (
                    <FeatureContent feature={feature} />
                ))}
            </div>
        </div>
    );
}

export default FeaturesView;