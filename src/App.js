
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Feed from './components/Feed';
import Register from './components/Register';
//import Post from './components/Post'

function App() {
  return (
      <div className="container">
        <Router>
        <Routes>
        <Route path='/' exact element={<Register /> }/>
        <Route path='/posts' exact element={<Feed /> }/>
        </Routes>
        </Router>
      </div>
  );
}

export default App;
