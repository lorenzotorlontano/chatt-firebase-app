import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import { firebaseConfig } from '../../config/firebaseConfig';
import {
  FirebaseAuthProvider,
} from "@react-firebase/auth";
import { useHistory } from 'react-router-dom';


const SignInComponent = () => {

    let history = useHistory();

    const signInWithGoogle = () => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider).then((data : any)=> history.push('/chatRoom'));
    }

    return (
        <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
        <div>
          <button
            onClick={signInWithGoogle}
          >
            Sign In with Google
          </button>
        </div>
        </FirebaseAuthProvider>
    );
}

export default SignInComponent;
