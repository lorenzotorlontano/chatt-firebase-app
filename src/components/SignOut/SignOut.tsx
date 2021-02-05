import firebase from 'firebase/app';
import {
    FirebaseAuthProvider,
} from "@react-firebase/auth";
import { firebaseConfig } from '../../config/firebaseConfig';
import { useHistory } from 'react-router-dom';
  
export default function SignOut() {

    let history = useHistory();
    
    return (
        <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
            <button
            onClick={() => {
                firebase.auth().signOut().then(()=> history.push('/'))
            }}
            >
            Sign Out
            </button>
        </FirebaseAuthProvider>
    )
}
