import { initializeApp,  FirebaseError, } from 'firebase/app';

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
    setDoc,
    collection,
    writeBatch,
    query,
} from 'firebase/firestore';
  
const firebaseConfig = {
    apiKey: "AIzaSyA_aLrzSqrunPW4Xq4rGvWFJpNMxXuV7gw",
    authDomain: "clothing-db-63b47.firebaseapp.com",
    projectId: "clothing-db-63b47",
    storageBucket: "clothing-db-63b47.appspot.com",
    messagingSenderId: "953513898950",
    appId: "1:953513898950:web:e153e88bdef7bb51f6b8c7"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
  
    return userDocRef;
};
export const signInWithEmail = async(credentials) => {
  try {
    return await signInWithEmailAndPassword(auth, credentials.email, credentials.password )
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message)
    } else {
      throw new Error(JSON.stringify(error))
    }
  }
}
export const signUpUser = async (credentials) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
    let user = userCredential.user
    return user
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message)
    }
  }
}

export const getCategories = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  
  const data = querySnapshot.docs.map(doc => doc.data());

  return data
};


  
