import './SignIn.css'
import InputText from './InputText'

function SignIn() {
    return (
        <>
            <div>
                <h2>Sign In</h2>

                <InputText label="User Name" />
                <InputText label="Password" />
             </div>
        </>
    )
}

export default SignIn