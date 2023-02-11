import { Card, CardActions, CardContent, Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewBlog = () => {

    const { title } = useParams();
    const [blogs, setBlogs] = useState();

    useEffect(() => {
        axios.get('https://dummyjson.com/posts')
        .then(res => setBlogs(res.data.posts))
    },[])

    const post = blogs?.find(card => card.title === title)
    console.log(post)

    return (
        <div>
            <Card sx={{ maxWidth: 450 }} style={{margin: "auto"}}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                        {post?.title}
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <Chip label={post?.tags[0]} variant="outlined" color="primary"/>
                            <Chip label={post?.tags[1]} variant="outlined" color="primary"/>
                            <Chip label={post?.tags[2]} variant="outlined" color="primary"/>
                        </Stack>
                        <Typography variant="h6">
                        {post?.body}
                        </Typography>
                    </CardContent>
                    
                </Card>
        </div>
    )
}

export default ViewBlog;