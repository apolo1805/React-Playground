import './App.css'
import { useState } from 'react'

function App() {
  const [nameValue, setNameValue] = useState('')
  const [usernameValue, setUsernameValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const handleNameChange = (event: any) => {
    setNameValue(event.target.value);
  };

  const handleUsernameChange = (event: any) => {
    setUsernameValue(event.target.value);
  };


  const handlePasswordChange = (event: any) => {
    setPasswordValue(event.target.value);
  };

  const signClick = (event: any) => {
    event.preventDefault();

    if (nameValue === '' || usernameValue === '' || passwordValue === '') {
      alert("Please fill all the fields");
    }
    else {
      alert("New user was created!");
      setNameValue('');
      setUsernameValue('');
      setPasswordValue('');
    }
  };

  return (
    <>
      <div className="container">
        <h1>React Playground Project</h1>
        
        <form>
          <h2 className="form-title">Sign Up Form</h2>
          <div className="form-group row mb-3">
            <label htmlFor="inputText1" className="col-sm-2">Name:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputText1" name="inputText1" value={nameValue} onChange={handleNameChange} placeholder="Enter your name" />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label htmlFor="inputText2" className="col-sm-2">User Name:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputText2" name="inputText2" value={usernameValue} onChange={handleUsernameChange} placeholder="Enter User Name" />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label htmlFor="inputText3" className="col-sm-2">Password:</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputText3" name="inputText3" value={passwordValue} onChange={handlePasswordChange} placeholder="Enter Password" />
            </div>
          </div>
          <div>
            <button className="btn btn-primary" onClick={signClick}>Sign Up</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
