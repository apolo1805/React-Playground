import InputText from './InputText'
import './SignUp.css'
import Button from './Button'
import { useState } from 'react'

function SignUp() {
  const [nameValue, setNameValue] = useState('')
  const [usernameValue, setUsernameValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

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
        <form>
          <h2 className="form-title">Sign Up Form</h2>
          
          <InputText label="Full Name" value={nameValue} />
          <InputText label="User Name" value={usernameValue} />
          <InputText label="Password" value={passwordValue} />
          <Button onClick={signClick} />
        </form>
      </div>
    </>
  )
}

export default SignUp
