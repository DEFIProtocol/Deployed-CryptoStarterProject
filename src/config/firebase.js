import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const fbConfig = {
    apiKey: "AIzaSyDxjW4q62A5SLQaXAquFxWTghCHzIzVSR8",
    authDomain: "gridlock-ec047.firebaseapp.com",
    projectId: "gridlock-ec047",
    storageBucket: "gridlock-ec047.appspot.com",
    messagingSenderId: "453382499408",
    appId: "1:453382499408:web:7a5ac4cee9fa434b057555",
    measurementId: "G-HXQ2MGXHBP"
  };
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default fbConfig;