
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import CreatePost from './components/CreatePost';
import Feed from './components/Feed/Feed';
import About from './components/About'
//import Post from './components/Post'
import Register from './components/Register/Register'

function App() {
  return (
      <div className="container">
        <Router>
        <Routes>
        <Route path='/' exact element={<Register /> }/>
        <Route path='/home' exact element={<Feed /> }/>
        <Route path='/about' element={ <About /> } />
        </Routes>
        </Router>
      </div>
  );
}

export default App;
