import { auth, googleAuthProvider } from '../firebase/firebase_init';

// LOGIN
export const login = (uid, displayName, email, photoURL) => ({
    type: 'LOGIN',
    uid,
    displayName,
    email,
    photoURL
});

// LOGOUT
export const logout = () => ({
    type: 'LOGOUT'
});

// Start Google login
export const startGoogleLogin = () => {
    return (dispatch) => {
        return auth.signInWithPopup(googleAuthProvider);
    };
};

// Start logout
export const startLogout = () => {
    return () => {
        return auth.signOut();
    };
};
