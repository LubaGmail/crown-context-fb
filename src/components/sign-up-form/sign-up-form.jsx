import { useState } from "react";  

import FormInput from "../form-input/form-input";
import {signUpUser} from '../../utils/firebase/firebase.utils'

import './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields
    const [accoutCreated, setAccountCreated] = useState(false)
    
    const handleSubmit = async(event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert('Passwords do not match!')
            return
        }
        const credentials = {
            email,
            password
        }
        try {
            const user = await signUpUser(credentials)
            handleReset()
            setAccountCreated(true)
            window.scrollTo(0,0);
        } catch (error) {
            alert(error)
        }
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
            <div className="sign-up-container">
                {
                    accoutCreated ? (
                        <h3>Account created successfully.</h3>
                    ): (
                        <h3>Don't have an account?</h3>
                    )
                }
                
                <form onSubmit={handleSubmit} onReset={handleReset}>

                    <FormInput label='Display name'
                        onChange={handleChange}
                        required
                        type='text' 
                        name='displayName'
                        value={displayName}
                    />  
                    
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
                    
                    <FormInput label='Confirm password'
                        onChange={handleChange}
                        required
                        type='text' 
                        name='confirmPassword'
                        value={confirmPassword}
                    /> 
                    
                    <div className="buttons-container">
                        <button type='submit' className="submit-button">Sign Up</button>
                        <button type='reset' className="clear-button">Clear</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default SignUpForm