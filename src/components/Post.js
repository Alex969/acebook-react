import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Post = (response) => {
  return (
    <div className="container">
      <Box sx={{p:2}}> 
        <Typography variant="h5" gutterBottom component="div">
          {response.post.user.first_name} {response.post.user.last_name}
        </Typography>
        <Box component="span"
          sx={{
            display: 'block',
            m: 1,
            p:1,
            bgcolor: 'background.paper',
            border: 1,
            borderColor: 'grey.500',
            borderRadius: 2,
            width: '100%'
          }}>
          {response.post.content}
        </Box>
      </Box>
      </div>
  )
}


export default Post
