import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectPostById } from './postsSlice'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {Typography, Paper, Box} from '@mui/material';


export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector(state => selectPostById(state, postId))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    // <section>
    //   <article className="post">
    //     <h2>{post.title}</h2>
    //     <p className="post-content">{post.content}</p>
    //     <Link to={`/editPost/${post.id}`} className="button">
    //       Edit Post
    //     </Link>
    //   </article>
    // </section>
    <Box 
      sx={{
        '& > :not(style)': {
          m: 1, 
        },
    }}>
    <Paper elevation={3} id='paper'>

    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {post.content}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/editPost/${post.id}`} className="button">
           Edit Post
      </Link>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Paper> 
    </Box>
  )
}