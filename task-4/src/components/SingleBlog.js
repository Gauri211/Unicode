import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SingleBlog = () => {
    const {id} = useParams();
    
    const posts = useSelector((state) => state.postsRed.posts);

    const post = posts.find((card) => card.id === id);

    return (
        <div>
            <Card sx={{ maxWidth: 450 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                        {post.title}
                        </Typography>
                        <Typography variant="h6">
                        {post.content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">EDIT</Button>
                    </CardActions>
                </Card>
        </div>
    )
}

export default SingleBlog;