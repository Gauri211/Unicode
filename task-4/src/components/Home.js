import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './auth.js';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';



const Home = () => {

  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.logout()
    navigate('/')
}

const posts = useSelector((state) => state.postsRed.posts);
    console.log(posts);

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
  <>
    {/* <div>Home Page</div>
    <button onClick={() => navigate('signup')}>SignUp</button> */}
    <div>Welcome {auth.user} <br></br>
          <button onClick={handleLogout}>Logout</button>
    </div>
    <center><h1>Blogs</h1></center>
    <div>{renderedPosts}</div>
  </>
  ) 
}

export default Home;