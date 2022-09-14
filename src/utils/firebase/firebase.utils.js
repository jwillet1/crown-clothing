import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDfEW8cZ6ADschcUSGND2fZhwd1kTd_F5Y',
  authDomain: 'crwn-clothing-db-bec7b.firebaseapp.com',
  projectId: 'crwn-clothing-db-bec7b',
  storageBucket: 'crwn-clothing-db-bec7b.appspot.com',
  messagingSenderId: '18063207786',
  appId: '1:18063207786:web:b431ec8054d2ed3befc913',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

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
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log('error creatign user', error.message);
    }
  }
  return userDocRef;
};
