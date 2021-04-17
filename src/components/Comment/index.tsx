import React, { EventHandler, FormEventHandler, useState, FC } from 'react'
import { Box, Button, Grid, TextField } from '@material-ui/core';
import {useRouter} from "next/router"
import axios from "axios";

interface FormData {
  user: string;
  comment: string;
  
}


const Comment: FC<FormData> = ({}) => {
  const router = useRouter()

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
    <Box component="form"
                my={3}
            >
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="flex-end"
                    spacing={2}
                >
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Firstname" variant="outlined" name="firstname" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                        id="filled-multiline-static"
                        label="Comment"
                        multiline
                        rows={4}
                        defaultValue="Share with your artist "
                        variant="filled" onChange={handleChange}/>
                    </Grid>
                    <Box mt={5} display="flex" justifyContent="center">
                      <Box width="70%">
                          <Button type="submit" variant="contained" color="primary" fullWidth  onClick={handleSubmit}>Add Comment</Button>
                      </Box>
                    </Box>
                </Grid>
  </Box>
  )

}
export default Comment
