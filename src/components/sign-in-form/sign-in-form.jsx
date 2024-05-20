import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import FormInput from "../form-input/form-input";
import { UserContext } from '../../contexts/user.context';
import { signInWithGooglePopup, signInWithEmail } from '../../utils/firebase/firebase.utils'

import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const { setCurrentUser } = useContext(UserContext);
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const navigate = useNavigate();
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        const credentials = {
            email: email,
            password: password
        }

        try {
            let res = await signInWithEmail(credentials)
            console.log('res', res)
            setCurrentUser({
                userName: res.user.email
            })
            navigate('/')
        } catch (error) {
            alert(error)
        }
    }
    const handleGoogleSignIn = async() => {
        handleReset();
        const res = await signInWithGooglePopup();
        setCurrentUser({
            userName: res.user.displayName
        })
        navigate('/')
    }

    const handleReset = () => {
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