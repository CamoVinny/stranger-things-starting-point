import React, {useState} from 'react';


const MessageViewer = () => {
    const [user, setUser] = useState({})
    const [messages, setMessages] = useState();
    
    
    return (
<div>
         <div>hello</div>
       
      
                 {/* <div key={messages._id}>                         
                     <div>
                      <h2>User: {messages.fromUser.username}</h2>                      
                      <p>{messages.content}</p>                     
                    </div>                      
                 </div>                 */}
          
    </div>

    )
}

export default MessageViewer;