import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Post from "./Post";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default function PostList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {props.blogPosts.map(post => {
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
            />
          );
        })}
      </Grid>
    </div>
  );
}
