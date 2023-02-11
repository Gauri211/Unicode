import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blogs, setBlogs] = useState();

    useEffect(() => {
        axios.get('https://dummyjson.com/posts')
        .then(res => setBlogs(res.data.posts))
      },[])

      console.log(blogs)

    // const renderBlogs = blogs.map(post => {
    //     <Grid item xs={2} key={post.id}>
    //   <Card sx={{ maxWidth: 345 }}>
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //     {post.title}
    //     </Typography>
    //     {/* <Typography variant="body2" color="text.secondary">
    //     {post.content.substring(0, 100)}
    //     </Typography> */}
    //   </CardContent>
    //   <CardActions>
    //   <Link to={`/posts/${post.id}`} className="button">
    //        View Post
    //   </Link> 
    //     {/* <Button size="small" onClick={() => dlt(post.id)}>DELETE</Button> */}
    //   </CardActions>
    // </Card>
    // </Grid>
    // })

      return (
        <>
            <div>Welcome 
        <br></br>
        </div>
        <center><h1>Blogs</h1></center>
        {/* <div>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {renderBlogs}
        </Grid>
        </div>   */}
    </>      
      )
}

export default Blogs;

