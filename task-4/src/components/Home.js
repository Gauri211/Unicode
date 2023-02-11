import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Pagination  from './Pagination';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const Home = () => {
    const [blogs, setBlogs] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        axios.get('https://dummyjson.com/posts')
        .then(res => setBlogs(res.data.posts))
      },[])

      const lastPostIndex = currentPage * postsPerPage;
      const firstPostIndex = lastPostIndex - postsPerPage;
      const currentPosts = blogs?.slice(firstPostIndex, lastPostIndex);

      const paginate = pageNos => setCurrentPage(pageNos);

      const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

      return (
        <>
        {/* </div>
        <center><h1>Blogs</h1></center>
        <div> */}
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{margin: "10px"}}>
        {blogs?.map(post => {
          return (
        <Grid item xs={4} key={post.id}>
      <Card sx={{ maxWidth: 400 }} blogs={currentPosts}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {post.title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
        {post.content.substring(0, 100)}
        </Typography> */}
      </CardContent>
      <Stack direction="row" spacing={1}>
        <Chip label={post.tags[0]} variant="outlined" color="primary"/>
        <Chip label={post.tags[1]} variant="outlined" color="primary"/>
        <Chip label={post.tags[2]} variant="outlined" color="primary"/>
      </Stack>
      <CardActions>
      <Link to={`/blogs/${post.title}`}>
           View Post
      </Link> 
      </CardActions>
      <Typography gutterBottom variant="body2" component="div">
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite style={{ color: "red" }}/>} />
        {post.reactions}
      </Typography>    
    </Card>
    </Grid>
    )})}
        </Grid> 
    <Pagination 
      postsPerPage={postsPerPage} 
      totalPosts={blogs?.length} 
      paginate={paginate}
    />
    </>      
      )
}

export default Home;

