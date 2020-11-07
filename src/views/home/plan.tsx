import React from 'react';
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Plan {
    title: string
    text: string
    features: string[]
}
const mockPlans: Plan[] = [
    {
        "title": 'Free',
        "text": '簡単な機能をお試しできます',
        "features": [
            "テンプレートの使用",
            "無制限の投稿",
            "月20回の使用"
        ]
    },
    {
        "title": 'Standard',
        "text": '全ての機能を利用したい方へ',
        "features": [
            "Freeプランの全ての機能",
            "テンプレートの商用利用可",
            "無制限の使用"
        ]
    },
    {
        "title": 'Premium',
        "text": '24時間のサポート付き利用',
        "features": [
            "Standardプランの全ての機能",
            "永年利用可",
            "24時間サポート",
        ]
    },
]

const usePlanContentStyles = makeStyles({
    root: {
        margin: 30,
        width: '20%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    feature: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'dimgray',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
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

interface PlanContentProps {
    plan: Plan
}

const PlanContent: React.FC<PlanContentProps> = (props) => {
    const { plan } = props
    const classes = usePlanContentStyles();
    return (
        <Paper className={classes.root} elevation={0}>
            <div className={classes.text_container}>
                <Typography className={classes.title}>{plan.title}</Typography>
                <Typography className={classes.text}>{plan.text}</Typography>
                {plan.features.map((feature) => (
                    <Typography className={classes.feature}>{feature}</Typography>
                ))}
            </div>
        </Paper>
    );
}

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
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
    plans_container: {
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

const PlansView: React.FC<Props> = (props) => {
    //const { content } = props
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>{"PLAN"}</Typography>
            <div className={classes.plans_container}>
                {mockPlans.map((plan) => (
                    <PlanContent plan={plan} />
                ))}
            </div>
        </div>
    );
}

export default PlansView;