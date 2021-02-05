import firebase from 'firebase/app';
import {
    FirebaseAuthProvider,
} from "@react-firebase/auth";
import { firebaseConfig } from '../../config/firebaseConfig';
  
export default function SignOut() {
    
    const handleSignOut = () => {
        firebase.auth().signOut()
    }

    return (
        <div>
            <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
                <button onClick={handleSignOut}>
                    Sign Out
                </button>
            </FirebaseAuthProvider>
        </div>
    )
}
