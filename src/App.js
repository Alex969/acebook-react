
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginControl from './components/LoginControl';
//import Post from './components/Post'

function App() {
  return (
      <div className="container">
        <Router>
        <Routes>
        <Route path='/' exact element={<LoginControl /> }/>
        </Routes>
        </Router>
      </div>
  );
}

export default App;
