import Post from './Post'
import CreatePost from './CreatePost';
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
    }

    getPosts()
  }, [])

  // Creates Post

  const createPost = async (post) => {
    const res = await fetch('https://acebook-api.herokuapp.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(post),
    })

    const data = await res.json()

    setPosts([...posts, data])
  }

  return (
    <>
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
    </>
  )
}

export default Feed
