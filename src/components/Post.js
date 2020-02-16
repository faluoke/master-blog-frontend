import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import {
  Avatar,
  CardHeader,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  CardContent
} from "@material-ui/core";

import DeletePost from "./DeletePost";
import EditPost from "./EditPost";

const useStyles = makeStyles({
  card: {
    minWidth: 300
  },
  media: {
    height: 250
  },
  link: {
    textDecoration: "none"
  }
});

export default function Post(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} lg={4} xl={2}>
      <Card className={classes.card} variant="outlined">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Moon Night"
          />
          <CardContent>
            <Typography variant="h5" color="primary">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textPrimary">
              {props.body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <EditPost
            id={props.id}
            title={props.title}
            author={props.author}
            image={props.image}
            body={props.body}
            editPost={props.editPost}
          />
          <DeletePost id={props.id} fetchPosts={props.fetchPosts} />
        </CardActions>
      </Card>
    </Grid>
  );
}
