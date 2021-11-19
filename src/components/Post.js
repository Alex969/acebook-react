import React from 'react'
//import ListItem from '@mui/material/ListItem';
//import Divider from '@mui/material/Divider';
//import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import timeSince from '../timeSince'

const Post = (response) => {


  return (
    <div className="container">
      <Typography variant="h5" gutterBottom component="div">
        {response.post.user.first_name} {response.post.user.last_name} {response.post.created_at}
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
        {response.post.content}
      </Box>
      {(() => {
        if (response.post.like_count == 1) {
          return (
            <div>{response.post.like_count} like</div>
          )
        } else if (response.post.like_count > 1) {
          return (
            <div>{response.post.like_count} likes</div>
          )
        }
      })()}
      {(() => {
        if (response.post.comment_count > 0) {
          return (
            <>
              <div>{response.post.comment_count} comments</div>
              <div>
                {response.post.comments[0].user.first_name} {" "}
                {response.post.comments[0].user.last_name}
              </div>
              <div>{response.post.comments[0].content}</div>
              <div>{response.post.comments[0].like_count} likes</div>
            </>
          )
        } else {
          return 
        }
      })()}
    </div>
  )
}


export default Post
