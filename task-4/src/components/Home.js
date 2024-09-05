import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link, useParams } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Pagination  from './Pagination';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { GET_POSTS } from '../redux/actions/action';
import './styles/styles.css';
import Blogs from './Blogs';

const Home = () => {
    const [blogs, setBlogs] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const dispatch = useDispatch();
    // const blogs = useSelector(state => state.postsRed.posts);
    console.log(blogs)

    useEffect(() => {
        axios.get('https://dummyjson.com/posts')
        .then(res => setBlogs(res.data.posts))
      },[])

      const title = useParams();

      const [search, setSearch] = useState('');

      const lastPostIndex = currentPage * postsPerPage;
      const firstPostIndex = lastPostIndex - postsPerPage;
      const currentPosts = blogs?.slice(firstPostIndex, lastPostIndex);

      const paginate = (pageNos) => setCurrentPage(pageNos);


      const handleSubmit = () => {

      }
      return (
        <>
        <div>
          <center><h1>Blogs</h1></center>
          <Blogs blogs={currentPosts} />
          <Pagination postsPerPage={postsPerPage} totalPosts={blogs?.length} paginate={paginate}/>
        </div>
        
      </>      
      )
}

export default Home;

