import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Post from "./Post";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  loading: {
    position: "absolute",
    top: "30%",
    left: "50%"
  }
}));

export default function PostList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {props.loading ? (
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        ) : (
          props.blogPosts.map(post => {
            return (
              <Post
                key={post._id}
                id={post._id}
                author={post.author}
                title={post.title}
                body={post.body}
                image={post.image}
                date={post.date}
                fetchPosts={props.fetchPosts}
                editPost={props.editPost}
              />
            );
          })
        )}
      </Grid>
    </div>
  );
}
