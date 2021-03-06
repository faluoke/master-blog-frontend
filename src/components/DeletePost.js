import React from "react";
import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

export default function DeletePost(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleOnClick = () => {
    props.deletePost(props.id);
  };
  return (
    <div>
      <IconButton onClick={handleClick}>
        <DeleteIcon color="secondary" />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Typography className={classes.typography}>
          Are you sure you want to delete this post?
        </Typography>
        <Button onClick={handleOnClick} color="secondary">
          Yes
        </Button>
        <Button onClick={handleClose}>No</Button>
      </Popover>
    </div>
  );
}
