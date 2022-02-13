import React from "react";
import useStyles from "./styles";
import {Button, ButtonBase, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import moment from "moment";
import {Delete, MoreHoriz, ThumbUp, ThumbUpAltOutlined} from '@mui/icons-material';
import {useDispatch} from "react-redux";
import {deletePost, likePost} from "../../../actions/posts";
import {Skeleton} from "@mui/material";
import {useNavigate} from "react-router-dom";


const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const history = useNavigate()
    // console.log("post.name:", post)

    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <><ThumbUp fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
                ) : (
                    <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    const openPost = () => history(`/posts/${post._id}`)
    // console.log("googleId ", user?.result?.googleId)
    // console.log("post ", post)
    // console.log("post?.creator", post?.creator)
    return(
        <Card className={classes.card} raised elevation={6} >

                {post ? (
                    <ButtonBase className={classes.cardAction} onClick={() => openPost()}>
                        <CardMedia className={classes.media}
                                   image={post.selectedFile  || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title}
                        />
                        <div className={classes.overlay}>
                            <Typography variant={"h6"}>{post.name}</Typography>
                            <Typography variant={"body2"}>{moment(post.createdAt).fromNow()}</Typography>
                        </div>
                    </ButtonBase>
                ) : (<Skeleton className={classes.media}/>)}
                <div className={classes.overlay2}>
                    {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <Button style={{ color: 'white'}} size={"small"} onClick={(e) => {
                        e.stopPropagation();
                        setCurrentId(post._id);
                    }}>
                        <MoreHoriz />
                    </Button>
                    )}
                </div>
            <ButtonBase className={classes.cardAction} onClick={() => openPost()}>
                <div className={classes.details}>
                    <Typography variant={"body2"} color={"textSecondary"}>{post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <Typography variant={"h5"} className={classes.title} gutterBottom>{post.title}</Typography>
                <CardContent>
                    <Typography variant={"body2"} color={"textSecondary"} component={"p"} gutterBottom>{post.message}</Typography>
                </CardContent>
            </ButtonBase>

            <CardActions className={classes.cardActions}>
                <Button size={"small"} color={"primary"} disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
                    <Likes/>
                </Button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                        <Delete fontSize="small" /> Delete
                    </Button>
                )}
            </CardActions>

        </Card>
    )
}

export default Post;
