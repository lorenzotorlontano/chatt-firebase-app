import React , {useState} from 'react';
import firebase from 'firebase/app'
import { useHistory } from "react-router-dom";
    import RouterView from './router/RouterView';
import { firebaseConfig } from './config/firebaseConfig';

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
      <div>
        <RouterView/>
      </div>
  );
}

export default App;
