import * as firebase from 'firebase';


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "goalcoach-333bb.firebaseapp.com",
    databaseURL: "https://goalcoach-333bb.firebaseio.com",
    projectId: "goalcoach-333bb",
    storageBucket: "",
    messagingSenderId: "1029397737343"
};

export const firebaseApp = firebase.initializeApp(config);
export const  goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');