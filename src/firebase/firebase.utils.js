import firebase from 'firebase/app'

import 'firebase/firestore'  //for database

import 'firebase/auth' //for authentication

const config ={
   
        apiKey: "AIzaSyDHeV6xX6qBfFUi7VnqCPQILZj60FOYyB4",
        authDomain: "crwn-db-6b5a4.firebaseapp.com",
        projectId: "crwn-db-6b5a4",
        storageBucket: "crwn-db-6b5a4.appspot.com",
        messagingSenderId: "385385674030",
        appId: "1:385385674030:web:7266fea44680437ed176bf",
        measurementId: "G-Y8DYPYCEHM"
    
};


// Initializes the App
firebase.initializeApp(config)

// Assigning your firebase authentication library
export const auth = firebase.auth()
// Assigning your firebase firestore library
export const firestore = firebase.firestore()

//
export const createUserProfileDocument=async(user,displayName)=>{
        
        //if not user object doesnot exist we are not going to create document
        if(!user) return 
        const userRef = firestore.doc(`users/${user.uid}`)

        //Get method to get those details
        const snapShot = await userRef.get()
        if(!snapShot.exists){
                //This is the details we have to store in firestore as a document
                const {email} = user
                const createdAt = new Date()


                try{
                        await userRef.set({
                                displayName,
                                email,
                                createdAt
                        })
                }
                catch(error){
                        console.log("Error creating a User Document",error.message)
                }
        }
        return userRef
}
//const createUserProfileDocument = (userAuth, additionalData) => {
  //      const userRef = firestore.collection('users')
  //      console.log(userRef)
//}


// Creating a new object from your authentication library for GoogleAuth Provider
const provider = new firebase.auth.GoogleAuthProvider()

// Setting the parameters to select an account prompt
provider.setCustomParameters({prompt:'select_account'})

// Executing this function SignInWithGoogle by calling signInWithPopup
// and providing the provider as the parameter for it using your auth library
export const signInwithGoogle = () => auth.signInWithPopup(provider)

export default firebase