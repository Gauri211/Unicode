// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// // import { nanoid } from '@reduxjs/toolkit'
// import { postAdded } from './postsSlice'
// // import { addNewPost } from './postsSlice'
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import { useNavigate } from 'react-router-dom';

// export const AddPostForm = () => {
//   const [title, setTitle] = useState('')
//   const [content, setContent] = useState('')
//   const [userId, setUserId] = useState('')
//   const [addRequestStatus, setAddRequestStatus] = useState('idle')
//   // const [count, setCount] = useState(0);

//   const dispatch = useDispatch()

//   const navigate = useNavigate()

//   // const users = useSelector(state => state.users)

//   const onTitleChanged = e => setTitle(e.target.value)
//   const onContentChanged = e => setContent(e.target.value)
//   // const onAuthorChanged = e => setUserId(e.target.value)

//   const onSavePostClicked = () => {
//     if (title && content) {
//       dispatch(
//         postAdded(title, content, userId)
//       )
//       setTitle('')
//       setContent('')
//       // setCount((c) => c + 1)
//       navigate('/blogs')
//     }
//   }

//   // useEffect(() => {
//   //   localStorage.setItem('count', String(count));
//   // }, [count]);

//   const canSave =
//     [title, content].every(Boolean) && addRequestStatus === 'idle'

//   // const onSavePostClicked = async () => {
//   //   if (canSave) {
//   //     try {
//   //       setAddRequestStatus('pending')
//   //       await dispatch(addNewPost({ title, content, user: userId })).unwrap()
//   //       setTitle('')
//   //       setContent('')
//   //     } catch (err) {
//   //       console.error('Failed to save the post: ', err)
//   //     } finally {
//   //       setAddRequestStatus('idle')
//   //     }
//   //   }
//   // }

//   // const usersOptions = users.map(user => (
//   //   <option key={user.id} value={user.id}>
//   //     {user.name}
//   //   </option>
//   // ))

//   return (
//     <Container maxWidth="sm">
//     <Box 
//       sx={{
//         '& > :not(style)': {
//           m: 1, 
//         },
//     }}>
//     <Paper elevation={3} id='paper'>
        
//       <CardContent>
//         <Typography variant="h4" component="div">
//             Write a Blog
//         </Typography>
//       </CardContent>

//       <label>
//         Title: <br></br>
//         <input id="input" type="text" placeholder="Enter Title"  value={title} onChange={onTitleChanged}></input>
//       </label>
//       <br></br>
//       {/* <label htmlFor="postAuthor">Author:</label>
//          <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
//           <option value=""></option>
//           {usersOptions}
//          </select> <br></br> */}
//       <label>
//         Content: <br></br>
//         <textarea placeholder="Write your thoughts..." rows='15' cols='30' id="postContent"
//           name="postContent"
//           value={content}
//           onChange={onContentChanged}></textarea>
//       </label>
//       <br></br>
//       <Button variant="outlined" onClick={onSavePostClicked} disabled={!canSave}>
//         Submit 
//       </Button>
      
//     </Paper> 
//     </Box>

//   </Container>
//   )
// }

const initialState = {
  blogs: []
};

function blogReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BLOG':
      return {
        ...state,
        blogs: [...state.blogs, action.blog]
      };
    case 'UPDATE_BLOG':
      return {
        ...state,
        blogs: state.blogs.map(blog => {
          if (blog.id === action.blog.id) {
            return action.blog;
          }
          return blog;
        })
      };
    case 'DELETE_BLOG':
      return {
...state,
        blogs: state.blogs.filter(blog => blog.id !== action.id)
      };
    default:
      return state;
  }
}