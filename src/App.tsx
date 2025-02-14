import Button from './Button'
import SignIn from './SignIn'
import SignUp from './SignUp'
import './App.css'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <h1>React Playground Project</h1>
        <nav>
          <Link to="/SignUp"><Button caption="Sign Up" onClick={() => {}} /></Link>
          <Link to="/SignIn"><Button caption="Sign In" onClick={() => {}} /></Link>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
