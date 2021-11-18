import React from 'react'
//import ListItem from '@mui/material/ListItem';
//import Divider from '@mui/material/Divider';
//import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Post = (post) => {
  console.log(post)
  return (
    <div className="container">
      <Typography variant="h5" gutterBottom component="div">
        {post.post.user.first_name} {post.post.user.last_name}
      </Typography>
      <Box component="span"
        sx={{
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          border: 1,
          borderColor: 'grey.500'
        }}>
        {post.post.content}
      </Box>
      </div>
  )
}


export default Post
