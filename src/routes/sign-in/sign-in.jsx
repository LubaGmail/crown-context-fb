import { signInWithGooglePopup, createUserDocumentFromAuth, } from '../../utils/firebase/firebase.utils' 

import SignUpForm from '../../components/sign-up-form/sign-up-form';
import SignInForm from '../../components/sign-in-form/sign-in-form';

import './sign-in.styles.scss'

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (

        <div className='auth-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default SignIn