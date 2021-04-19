import React, {  useState, FC } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { TextField } from '@material-ui/core';
import axios from "axios";


function PaperComponent(props: PaperProps) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  interface FormData {
    user: string;
    comment: string;
    
  }
  const Comment: FC<FormData> = ({}) => {
    //const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(!open);
  
  
    const [formData, setFormData] = useState({ user: "", comment: ""})
  
  
  
    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
        console.log(formData)
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
          const response = await axios.post('/api/comments/index', formData);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Share your thoughts
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Add a comment 
        </DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="name"
            fullWidth
          />
        <TextField 
            id="filled-multiline-static"
            label="Comment"
            multiline
            rows={4}
            defaultValue="Share with your artist "
            variant="filled" onChange={handleChange}/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add Comment
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}
