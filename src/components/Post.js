import React from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

const Post = (post) => {
  return (
    <List>
      <><ListItem alignItems="flex-start">
      <ListItemText
        primary="Username"
        secondary={<React.Fragment>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            `${post.content}`
            {console.log(post.content)}
          </Typography>
        </React.Fragment>} />
    </ListItem><Divider variant="inset" component="li" /></>
    </List>
  )
}

export default Post
