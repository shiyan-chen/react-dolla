import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import SignInPage from './pages/signinPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignInPage />} />
      </Routes>
    </Router>
  )
}

export default App
