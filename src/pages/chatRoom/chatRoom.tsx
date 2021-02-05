import React , {useState , useRef} from 'react'
import  firebase  from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { ChatMessage } from '../../components/ChatMessage/ChatMessage';

interface refTypeDummy {
    dummy : any;
    current : any;
}

export default function ChatRoom() {

    const [formValue , setFormValue] = useState<string>("");
    const dummy : any = useRef<refTypeDummy>(null);
    const firestore = firebase.firestore();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt', 'asc').limitToLast(25);
    const [messages] = useCollectionData(query, {idField: 'id'});

    const sendMessage = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { displayName , uid, photoURL } : any = firebase.auth().currentUser;
        await messagesRef.add({
          user: displayName,
          body: formValue ,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid: uid,
          photoURL: photoURL
        })
        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <div>
            <div>
                {messages && messages.map((msg : any) => <ChatMessage key={msg.id} message={msg} />)}
                <span ref={dummy}></span>
            </div>

            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Say something" />
                <button type="submit" disabled={!formValue}>send</button>
            </form>
      </div>
  
    );
}
