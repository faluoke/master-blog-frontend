import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/core/Menu";
import TextField from "@material-ui/core/TextField";

import CreatePost from "./CreatePost";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  textField: {
    border: "black"
  }
}));

export default function Nav(props) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              Master Blog
            </Link>
          </Typography>
          <CreatePost fetchPosts={props.fetchPosts} />
          <TextField
            label="Search"
            id="outlined-margin-dense"
            className={classes.textField}
            margin="dense"
            variant="outlined"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
