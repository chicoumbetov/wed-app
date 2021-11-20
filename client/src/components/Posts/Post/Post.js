import React, {useState} from "react";
import useStyles from "./styles";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import moment from "moment";
import {MoreHoriz, ThumbUp} from '@mui/icons-material';
import {useDispatch} from "react-redux";
import {deletePost} from "../../../actions/posts";


const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch()
    const classes = useStyles();

    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant={"h6"}>{post.creator}</Typography>
                <Typography variant={"body2"}>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white'}} size={"small"} onClick={() => {setCurrentId(post._id)}}>
                    <MoreHoriz />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant={"body2"} color={"textSecondary"}>{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography variant={"h5"} className={classes.title} gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant={"h5"} gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size={"small"} color={"primary"} onClick={() => {}}>
                    <ThumbUp/>
                    {` Like ${post.likeCount}`}
                </Button>
                <Button size={"small"} color={"primary"} onClick={() => dispatch(deletePost(post._id))}>
                    Delete
                </Button>
            </CardActions>

        </Card>
    )
}

export default Post;