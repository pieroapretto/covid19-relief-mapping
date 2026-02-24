import firebase from 'firebase/app';
import { firebaseConfig } from '../../private/firebase';

import 'firebase/database';
import 'firebase/analytics';
import 'firebase/auth';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();