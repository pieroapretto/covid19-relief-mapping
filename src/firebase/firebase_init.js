import * as firebase from 'firebase/app';
import { firebaseConfig } from '../../private/firebase';

import 'firebase/database';
import 'firebase/analytics';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.database();