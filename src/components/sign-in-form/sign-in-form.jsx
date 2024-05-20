import { useState, useContext } from 'react';

import FormInput from "../form-input/form-input";
import { UserContext } from '../../contexts/user.context';

import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const { setCurrentUser } = useContext(UserContext);
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields
    
    const handleSubmit = (event) => {
        event.preventDefault()
 
        // set UserContext 
        setCurrentUser({
            userName: 'Perchik'
        })

        handleReset()
    }
    const handleGoogleSignIn = (event) => {
        console.log('handleGoogleSignIn')
    }

    const handleReset = (event) => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    return (
        <>
            <div className="sign-in-container">
                <h3>Already have an account?</h3>
                <span>Sign In with your email and password</span>
                <form onSubmit={handleSubmit} onReset={handleReset}>
                    <FormInput label='Email'
                        onChange={handleChange}
                        required
                        type='text' 
                        name='email'
                        value={email}
                    /> 
                    
                    <FormInput label='Password'
                        onChange={handleChange}
                        required
                        type='text' 
                        name='password'
                        value={password}
                    /> 

                    <div className="buttons-container">
                        <button type='submit' className="email-signin-button">Sign In</button>
                        <button type='button'
                            className="google-signin-button"
                            onClick={handleGoogleSignIn}
                        >Sign In with Google</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignInForm