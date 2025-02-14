import Button from './Button'
import SignIn from './SignIn'
import SignUp from './SignUp'
import './App.css'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { UserProvider, useUser } from './UserContext'

function App() {

  return (
    <>
      <UserProvider>
        <Router>
          <MainContent />
        </Router>
      </UserProvider>
    </>
  )
}

function MainContent() {
  const { isSigned } = useUser();

  return  (
    <>
      <h1>React Playground Project</h1>
      
      <nav>
        {!isSigned && (
          <>
            <Link to="/SignUp"><Button caption="Sign Up" onClick={() => {}} /></Link>
            <Link to="/SignIn"><Button caption="Sign In" onClick={() => {}} /></Link>
          </>
        )}
      </nav>      

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
