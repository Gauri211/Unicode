import { Link } from 'react-router-dom';
import { useAuth } from './auth.js';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { DELETE } from '../redux/actions/action';

const Myblogs = () => {

  const auth = useAuth(); 

const posts = useSelector((state) => state.postsRed.posts);

  const dispatch = useDispatch();

  const dlt = (id) => {
    dispatch(DELETE(id))
  }
    const renderedPosts = posts.map(post => (
      <Grid item xs={2} key={post.id}>
      <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {post.title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
        {post.content.substring(0, 100)}
        </Typography> */}
      </CardContent>
      <CardActions>
      <Link to={`/posts/${post.id}`} className="button">
           View Post
      </Link> 
        <Button size="small" onClick={() => dlt(post.id)}>DELETE</Button>
      </CardActions>
    </Card>
    </Grid>
    ))

  return (
  <>
    {/* <div>Home Page</div>
    <button onClick={() => navigate('signup')}>SignUp</button> */}
    <div>Welcome {auth.user} 
      <br></br>
    </div>
    <center><h1>Blogs</h1></center>
    <div>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {renderedPosts}
      </Grid>
    </div>
  </>
  ) 
}

export default Myblogs;