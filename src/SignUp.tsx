import InputText from './InputText'
import './SignUp.css'
import Button from './Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const [nameValue, setName] = useState('')
  const [usernameValue, setUsername] = useState('')
  const [passwordValue, setPassword] = useState('')
  const navigate = useNavigate();

  const signClick = (event: any) => {
    event.preventDefault();

    if (nameValue === '' || usernameValue === '' || passwordValue === '') {
      alert("Please fill all the fields");
    }
    else {
      alert("New user was created!");
      setName('');
      setUsername('');
      setPassword('');
      const user = {
        name: nameValue,
        username: usernameValue,
        password: passwordValue
      };
      const guid = crypto.randomUUID();
      localStorage.setItem(guid, JSON.stringify(user));
      navigate('/SignIn');
    }
  };

  const updateName = (e: any) => {
    setName(e);
  }

  const updateUsername = (e: any) => {
    setUsername(e);
  }

  const updatePassword = (e: any) => {
    setPassword(e);
  }

  return (
    <>
      <div className="container">
        <form>
          <h2 className="form-title">Sign Up Form</h2>
          
          <InputText label="Full Name" value={nameValue} changeValue={updateName} />
          <InputText label="User Name" value={usernameValue} changeValue={updateUsername} />
          <InputText label="Password" value={passwordValue} changeValue={updatePassword} />
          <Button caption="Sign Up" onClick={signClick} />
        </form>
      </div>
    </>
  )
}

export default SignUp
