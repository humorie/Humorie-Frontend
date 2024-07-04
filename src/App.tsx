import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import History from './pages/History'
import Counseling from './pages/Counseling'
import Main from './pages/Main'
import Counselor from './pages/Counselor'
import MoreReviews from './pages/Reviews'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />
        <Route path="/counseling" element={<Counseling />} />
        <Route path="/counseling/counselor" element={<Counselor />} />
        <Route path="/counseling/counselor/reviews" element={<MoreReviews />} />
      </Routes>
    </Router>
  )
}

export default App
