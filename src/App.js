import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import CreatePost from './components/CreatePost';
//import Feed from './components/Feed';
import About from './components/About'
import Post from './components/Post'

function App() {

  const [posts, setPosts] = useState([])

  //Fetch Posts
  const fetchPosts = async () => {
    const res = await fetch('http://localhost:5000/posts')
    const data = await res.json()
    return data
  }

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer)
      console.log(postsFromServer)
      const post = postsFromServer[0]
      console.log(post.body)
    }

    getPosts()
  }, [])

  

  return (
      <div className="container">
        <Router>
        <Routes>
        <Route path='/' exact element={<Post post = {posts[0]} /> }/>
        <Route path='/about' element={ <About /> } />
        </Routes>
        </Router>
      </div>
  );
}

export default App;
