export function ChatMessage(props : any) {
    const { user, body, uid, photoURL, createdAt } = props.message;
  
      return (
        <>
            <div style={{display : 'flex' , alignItems : 'center'}}>
            <div style={{paddingRight : "10px"}}>
                <img style={{width : '20px'}} src={photoURL}  />
            </div>
               <div> <p>{body}</p></div>
            </div>
        </>
    )
}
