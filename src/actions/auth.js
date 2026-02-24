import { auth, facebookAuthProvider } from '../firebase/firebase_init';

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

// Start Facebook login
export const startFacebookLogin = () => {
    return (dispatch) => {
        return auth.signInWithPopup(facebookAuthProvider);
    };
};

// Start logout
export const startLogout = () => {
    return () => {
        return auth.signOut();
    };
};
