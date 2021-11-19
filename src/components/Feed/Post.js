import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import addLikeToComment from '../addLikeToComment';
import addLikeToPost from '../addLikeToPost';
import timeSince from '../../timeSince'


const Post = (response) => {
  return (
    <div className="container">
      <Box sx={{p:2}}> 
        <Typography variant="h5" gutterBottom component="div">
        {response.post.user.first_name} {response.post.user.last_name} {timeSince(response.post.created_at)}
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
      <div>{addLikeToPost(response.post.id)}</div>
      {(() => {
        if (response.post.like_count === 1) {
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
                {response.post.comments[0].user.last_name} {" "}
                {timeSince(response.post.comments[0].created_at)}
              </div>
              <div>{response.post.comments[0].content}</div>
              <div>{response.post.comments[0].like_count} likes</div>
              <div>{addLikeToComment(response.post.comments[0].id)}</div>
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
