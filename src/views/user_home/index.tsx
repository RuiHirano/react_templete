import React, { useContext, useEffect } from 'react';
import { Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Paper, Card, CardContent } from "@material-ui/core";
import InboxIcon from '@material-ui/icons/Inbox';
import moment from "moment";
import { Item } from '../../types';
import { match } from "react-router";
import * as H from "history";
import { makeStyles } from "@material-ui/core/styles";
import { UserStore } from '../../store/user';
import { mockDocument } from '../../utils/mock'
import { Analyzer, AnalyzeItem1 } from '../../utils/analyzer';
import { LineChart, XAxis, Tooltip, Line, CartesianGrid, PieChart, Pie, Cell, Label, Bar, BarChart } from 'recharts'


const linedata = [
    { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
    { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
    { name: 'Page E', uv: 278, pv: null, amt: 2400, uvError: 28 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
    { name: 'Page G', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
    { name: 'Page H', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
    { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
    { name: 'Page J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
];

const COLORS = [
    '#2250A2',
    '#da50a2',
];

const piedata = [
    { name: '男性', value: 532 },
    { name: '女性', value: 232 },
];

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

    useEffect(() => {
        const item1 = new AnalyzeItem1()
        const analyzer = new Analyzer(mockDocument, [item1])
        const analyzedData = analyzer.analyze()
        console.log("analizedData", analyzedData)
    }, [])

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xl={3} lg={3} md={3} sm={12} xs={12}></Grid>
                <LineChart
                    width={400}
                    height={400}
                    data={linedata}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                    <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
                </LineChart>
                <BarChart
                    width={400}
                    height={400}
                    data={linedata}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Bar type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                    <Bar type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
                </BarChart>
                <PieChart
                    width={400}
                    height={400}
                >
                    <Pie //円グラフの位置や大きさ、データやラベルの内容を指定
                        data={piedata}  //Array型のデータを指定
                        nameKey="name" //データで表示させるタイトルを指定
                        dataKey="value" //データで表示させる値(数値)を指定
                        cx="50%"  //要素の左を基準に全体の50%移動
                        cy="50%"  //要素の上を基準に全体の50%移動
                        labelLine={false}  //ラベルの線の表示を消す
                    //label={renderCustomizedLabel} //ラベルの中身を指定。何も指定しなければパラメーターの値が表示される
                    >
                        { //円グラフの色を各領域ごとに分けるように指定
                            piedata.map((entry: any, index: number) =>
                                <Cell fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                </PieChart>

                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <ItemListView history={history} />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                    <Card>
                        <CardContent>
                            <Grid container justify="space-between">
                                <Grid item>
                                    <Typography
                                        style={{ fontWeight: 500 }}
                                        color="textSecondary"
                                        gutterBottom
                                        variant="body2"
                                    >
                                        ProfitRatio
                        </Typography>
                                    <Typography variant="h3">{"2342"}</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>
        </div>
    );
}

export default UserHomeView;
