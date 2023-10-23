import './App.css'
import RegisterPage from './components/RegisterPage'
import CategoryPage from './components/CategoryPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/CategoryPage" element={<CategoryPage />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
