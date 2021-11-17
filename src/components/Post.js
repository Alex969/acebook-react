import React from 'react'
//import ListItem from '@mui/material/ListItem';
//import Divider from '@mui/material/Divider';
//import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
//import Typography from '@mui/material/Typography';

const Post = (post) => {
  console.log(post)
  return (
      <><Box
        component="span"
        sx={{
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
        {post.post.content}
      </Box></>
  )
}


export default Post
