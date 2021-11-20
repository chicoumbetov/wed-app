import React, {useEffect, useState} from "react";
import {AppBar, Container, Grid, Grow, Typography} from '@material-ui/core'

import { getPosts } from './actions/posts'
import memories from './assets/images/images.jpeg'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import useStyles from './styles'
import {useDispatch} from "react-redux";

function App() {
    const [ currentId, setCurrentId] = useState(null);

    const classes = useStyles();
    const dispatch = useDispatch()
    // console.log("dispatch", dispatch(getPosts()))
    useEffect(()=> {
        dispatch(getPosts())
    }, [dispatch])

  return (
    <Container maxWidth={"lg"}>
        <AppBar className={classes.appBar} position={"static"} color={"inherit"}>
            <Typography className={classes.heading} variant={"h2"} align={"center"}>
                Wedding
            </Typography>
            <img className={classes.image} src={memories} alt={"memories"} height={"60"}/>

        </AppBar>
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justifyContent={"space-between"} alignItems={"stretch"} spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
  );
}

export default App;
