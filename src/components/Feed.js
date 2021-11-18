import Post from './Post'
import CreatePost from './CreatePost';
import Header from './Header';
import { useState, useEffect} from 'react';
import '../Register.css'
import Box from '@mui/material/Box';



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
    }

    getPosts()
  }, [])

  // Creates Post

  const createPost = async (post) => {
    const res = await fetch('https://acebook-api.herokuapp.com/posts', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(post),
    })

    const data = await res.json()

    setPosts([data, ...posts])
  }

  return (
    <>
    <Box sx={{bgcolor: 'grey.200'}}> <Header />
      <Box sx={{p:5}}>
        <div className="container">
          <CreatePost onCreate={createPost } />
        </div>
        <div className="container">
          {posts.map((post, index) => { //renders 1 post component per json blob fetched
            return( 
              <div key={index}>
                <Post post = {post}/>
              </div>
            )
          })}
        </div>
      </Box> 
    </Box> 
    </>
  )
}

export default Feed
