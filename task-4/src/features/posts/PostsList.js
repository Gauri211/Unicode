import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllPosts} from './postsSlice'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {Typography, Paper, Box} from '@mui/material';

export const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)

  const postStatus = useSelector(state => state.posts.status)

  // useEffect(() => {
  //   if (postStatus === 'idle') {
  //     dispatch(fetchPosts())
  //   }
  // }, [postStatus, dispatch])
  
  const renderedPosts = posts.map(post => (
    <Card sx={{ maxWidth: 345 }} key={post.id}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {post.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {post.content.substring(0, 100)}
      </Typography>
    </CardContent>
    <CardActions>
    <Link to={`/posts/${post.id}`} className="button">
         View Post
    </Link>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}