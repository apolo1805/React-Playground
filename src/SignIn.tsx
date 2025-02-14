import './SignIn.css'
import InputText from './InputText'
import Button from './Button'
import { useState } from 'react'

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signInClicked = () => {
        if (username === '' || password === '') {
            alert("Please enter user name and password, in order to sign in.");
        } 
        else {
            for(let key in localStorage) {
                if (localStorage.hasOwnProperty(key)) {
                    var user = localStorage.getItem(key);
                    if (user != null) {
                        var userJson = JSON.parse(user);
                    
                        if (userJson.username === username && userJson.password === password) {
                            alert("Sign in successful!");
                            return;
                        }
                    }
                }
            }
            alert("Signing in with user name: " + username + " and password: " + password + " failed.");
        }
    }

    const updateUsername = (e: any) => {
        setUsername(e);
    }

    const updatePassword = (e: any) => {
        setPassword(e);
    }

    return (
        <>
            <div>
                <h2>Sign In</h2>

                <InputText id="username" name="username" label="User Name" changeValue={updateUsername} />
                <InputText id="password" name="password" label="Password" changeValue={updatePassword} />
                <Button caption="Sign In" onClick={signInClicked} />
             </div>
        </>
    )
}

export default SignIn