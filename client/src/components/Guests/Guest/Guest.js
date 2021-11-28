import React from "react";
import useStyles from "./styles";
import {Button, Typography} from "@material-ui/core";
// import moment from "moment";
import {DeleteOutline, ThumbUp} from '@mui/icons-material';
import {useDispatch} from "react-redux";
import {deletePost, likePost} from "../../../actions/posts";


const Guest = ({ post, setCurrentId }) => {
    const dispatch = useDispatch()
    const classes = useStyles();

    return(
        <div style={{ display: 'flex'}}>
            <div className={classes.card}>
                <div style={{ display: 'flex', flex: 1, marginLeft: '20px' }}>
                    <Typography onClick={() => {setCurrentId(post._id)}} style={{  width: '200px', marginRight: '10px'}} variant={"h6"}>{post.name}</Typography>
                    &nbsp;
                    <Typography variant={"h6"} className={classes.title} gutterBottom>{post.title}</Typography>
                    &nbsp;
                    <Typography variant={"h6"} className={classes.message} component={"p"} gutterBottom>{post.message}</Typography>
                    &nbsp;
                    <Typography variant={"h6"} className={classes.message}>{post.tags.map((tag) => ` ${tag} `)}</Typography>

                </div>
                <Button size={"small"} style={{ width: '50px'}} color={"default"} onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteOutline/>
                </Button>

            </div>
            <Button style={{ direction: 'column'}} size={"small"} color={"default"} onClick={() => dispatch(likePost(post._id))}>
                <ThumbUp/> &nbsp; &nbsp; {/** post.likes*/}
            </Button>
        </div>
    )
}

export default Guest;