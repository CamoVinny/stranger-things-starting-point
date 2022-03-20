// import React, {useState} from 'react';


// const MessageViewer = (props) => {
//     const [user, setUser] = useState({})
//     const [messages, setMessages] = useState();
//     const {messageData} = props
//     console.log("messageData",messageData)
//     return (
// <div>
//          <div>
//              <h3>Messages {messageData.messages.map(message => <div key={message._id}>{message.content} </div>)}</h3>
// </div>
     
//     </div>

//     )
// }

// export default MessageViewer;
import React, {useState} from 'react';
const MessageViewer = (props) => {
    const [user, setUser] = useState({})
    const [messages, setMessages] = useState('');
    const {messageId, messageContent, messageFromUser} = props
    return (
        <div>
         <div key = {messageId}>{`Message: ${messageContent}: from ${messageFromUser}`} </div>
    </div>
    )
}
export default MessageViewer;