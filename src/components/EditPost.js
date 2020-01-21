import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import axios from "axios";

export default function EditPost(props) {
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
    title: props.title,
    author: props.author,
    image: props.image,
    body: props.body
  });
  const handleInputChange = event => {
    const { name, value } = event.target;
    const clone = { ...inputs };
    clone[name] = value;

    setInputs(clone);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/api/post/update/${props.id}`, {
        title: inputs.title,
        author: inputs.author,
        image: inputs.image,
        body: inputs.body
      })
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          props.fetchPosts();
        }
      })
      .catch(err => {
        console.log(err);
      });
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <EditIcon color="primary" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Edit This Blog Post</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out all the fields below and click Post, or click
              cancel to exit
            </DialogContentText>
            <TextField
              autoFocus
              name="title"
              required
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              value={inputs.title}
              onChange={e => handleInputChange(e)}
            />
            <TextField
              name="author"
              required
              margin="dense"
              id="author"
              label="Author"
              type="text"
              fullWidth
              value={inputs.author}
              onChange={e => handleInputChange(e)}
            />
            <TextField
              name="image"
              required
              margin="dense"
              id="image"
              label="Image URL"
              type="url"
              fullWidth
              value={inputs.image}
              onChange={e => handleInputChange(e)}
            />
            <TextField
              name="body"
              required
              margin="dense"
              id="body"
              label="Blog Post Body"
              type="text"
              fullWidth
              multiline={true}
              rows={3}
              rowsMax={5}
              value={inputs.body}
              onChange={e => handleInputChange(e)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Post
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
