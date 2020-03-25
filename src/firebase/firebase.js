import * as firebase from 'firebase'; 
import { firebaseConfig } from '../../private/firebase';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: 'Piero'
});