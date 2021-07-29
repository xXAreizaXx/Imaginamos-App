import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZrxYDp5vYwZ7dBCxydd6jNHy7o6KIhxk",
    authDomain: "chukwudi-4fc12.firebaseapp.com",
    projectId: "chukwudi-4fc12",
    storageBucket: "chukwudi-4fc12.appspot.com",
    messagingSenderId: "943466388262",
    appId: "1:943466388262:web:4bd186c6e0ceeb4a6f7fe7"
};

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user) => {
    const { displayName, email, photoURL, uid } = user

    return {
        avatar: photoURL,
        username: displayName,
        email,
        uid,
    }
}

export const onAuthStateChanged = (onChange) => {
    return firebase.auth().onAuthStateChanged((user) => {
        const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
        onChange(normalizedUser)
    })
}

export const loginWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithRedirect(googleProvider)
        .then(mapUserFromFirebaseAuthToUser)
};

export const loginWithGitHub = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider();
    return firebase
        .auth()
        .signInWithRedirect(githubProvider)
        .then(mapUserFromFirebaseAuthToUser);
};
