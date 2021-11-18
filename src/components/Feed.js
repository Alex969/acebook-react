import Post from './Post'
import List from '@mui/material/List';
import { useState, useEffect} from 'react';

const Feed = () => {

  const [posts, setPosts] = useState([])

  //Fetch Posts
  const fetchPosts = async () => {
    const res = await fetch('https://acebook-api.herokuapp.com/posts')
    const data = await res.json()
    return data
  }

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer)
      const post = postsFromServer[0]
      console.log(post.content)
    }

    getPosts()
  }, [])

  return (
    <div className="container">
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {posts.map((post, index) => {
        console.log(post)
        return( 
          <div key={index}>
            <Post post = {post}/>
          </div>
        )
      })}
    </List>
    </div>
  )
}

export default Feed
