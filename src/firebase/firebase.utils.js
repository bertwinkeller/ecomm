import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config =  {
    apiKey: "AIzaSyCskADrocbnra7fQ5WO1heFCWl-XgDoiX4",
    authDomain: "ecomm-bfe23.firebaseapp.com",
    projectId: "ecomm-bfe23",
    storageBucket: "ecomm-bfe23.appspot.com",
    messagingSenderId: "272284452140",
    appId: "1:272284452140:web:d0994b797255bc951c9889",
    measurementId: "G-WCW7SSHS91"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()
     
    if(!snapShot.exists){
        const { displayName, email} = userAuth
        const createdAt = new Date()

        try{

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message) 
        }
    }

    return userRef
}

firebase.initializeApp(config) 
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

 