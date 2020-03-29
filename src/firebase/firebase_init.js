import * as firebase from 'firebase'; 
import { firebaseConfig } from '../../private/firebase';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();