import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    author: "",
    image: "",
    body: ""
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
    props.createPost(inputs.title, inputs.author, inputs.image, inputs.body);
    setOpen(false);

    //setting inputs to empty
    setInputs({
      title: "",
      author: "",
      image: "",
      body: ""
    });
  };

  return (
    <div>
      <Button color="inherit" variant="outlined" onClick={handleClickOpen}>
        Create Post
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Create a Blog Post</DialogTitle>
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
