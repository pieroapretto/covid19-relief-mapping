import firebase from 'firebase/compat/app';
import { firebaseConfig } from '../../private/firebase';

import 'firebase/compat/database';
import 'firebase/compat/analytics';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.database();