import Post from './Post'
import List from '@mui/material/List';

const Feed = (posts) => {
  return (
    <div className="container">
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {posts.forEach(post => {
        <Post post = {post}/>
      })}
    </List>
    </div>
  )
}

export default Feed
