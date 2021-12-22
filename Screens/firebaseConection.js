// Import the functions you need from the SDKs you need
import firebase  from "firebase/app";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfUCtD26It1O2oG-6C2yE0G8Rfv1v8ums",
  authDomain: "check-9549a.firebaseapp.com",
  projectId: "check-9549a",
  storageBucket: "check-9549a.appspot.com",
  messagingSenderId: "749811060427",
  appId: "1:749811060427:web:08ac6e50bc44e66f7b954e"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export default firebase;