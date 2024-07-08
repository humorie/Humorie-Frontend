import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import History from './pages/History'
import Main from './pages/Main'
import Counselor from './pages/Counselor'
import Counseling from './pages/Counseling'
import Review from './pages/Review'
import Post from './pages/Post'
import Complete from './pages/Complete'
import MoreReviews from './pages/Reviews'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />
        <Route path="/review" element={<Review />} />
        <Route path="/review/complete" element={<Complete />} />
        <Route path="/post" element={<Post />} />
        <Route path="/counseling" element={<Counseling />} />
        <Route path="/counseling/counselor" element={<Counselor />} />
        <Route path="/counseling/counselor/reviews" element={<MoreReviews />} />
      </Routes>
    </Router>
  )
}

export default App
