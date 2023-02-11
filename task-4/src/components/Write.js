import * as React from 'react';
import '../App.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ADD } from '../redux/actions/action';
import { nanoid } from '@reduxjs/toolkit';

const Write = () => {
    
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  // const [userId, setUserId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const dispatch = useDispatch();

  const navigate = useNavigate()

  
  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  
  let posts = {
    id: nanoid(),
    title: `${title}`,
    content: `${content}`
  }
  const onSavePostClicked = (posts) => {
    if (title && content) {
        dispatch(
            ADD(posts)
          )
          setTitle('')
          setContent('')
          navigate('/myblogs')
        }
    console.log(posts);
  }

  const canSave =
    [title, content].every(Boolean) && addRequestStatus === 'idle'
    
  return (
    <Container maxWidth="sm">
    <Box 
      sx={{
        '& > :not(style)': {
          m: 1, 
        },
    }}>
    <Paper elevation={3} id='paper'>
        
      <CardContent>
        <Typography variant="h4" component="div">
            Write a Blog
        </Typography>
      </CardContent>

      <label>
        Title: <br></br>
        <input id="input" type="text" placeholder="Enter Title"  value={title} onChange={onTitleChanged}></input>
      </label>
      <br></br>
      <label>
        Content: <br></br>
        <textarea placeholder="Write your thoughts..." rows='15' cols='30' id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}></textarea>
      </label>
      <br></br>
      <Button variant="outlined" onClick={() => onSavePostClicked(posts)} disabled={!canSave}>
        Save 
      </Button>
      
    </Paper> 
    </Box>

  </Container>

      );
  
}

export default Write;
