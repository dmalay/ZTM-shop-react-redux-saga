import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBj2vd_bE8n2B2q7zDi-i6_DtSRMDPZWhU",
  authDomain: "e-commerce-b92e2.firebaseapp.com",
  projectId: "e-commerce-b92e2",
  storageBucket: "e-commerce-b92e2.appspot.com",
  messagingSenderId: "592394195064",
  appId: "1:592394195064:web:b4a11b8f5375af5a895d8d",
  measurementId: "G-T6BS30TXTY"
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase