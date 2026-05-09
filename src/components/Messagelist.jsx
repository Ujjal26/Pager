/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Messagelist = ({status}) => {
    const [messages, setMessages] = useState([]);

    if(status){ // Note: to get the data from firebase after everytime the form is submitted
        axios.get('https://ud-pager-default-rtdb.asia-southeast1.firebasedatabase.app/message.json')
        .then(response =>{
            console.log(response.data);
            let messagelist =[];
            for(let messageId in response.data){
                messagelist.push(response.data[messageId]);
            }
            messagelist.reverse(); // Note: To display the latest message first and not the oldest one last
            let messagedisplay= messagelist.slice(0, 3); // Note: To display only 3 messages at a time
            setMessages(messagedisplay);
        })
    }
    
    useEffect(() => { // Note: to get the data from firebase on the first render
        axios.get('https://ud-pager-default-rtdb.asia-southeast1.firebasedatabase.app/message.json')
        .then(response =>{
            console.log(response.data);
            let messagelist =[];
            for(let messageId in response.data){
                messagelist.push(response.data[messageId]);
            }
            messagelist.reverse(); // Note: To display the latest message first and not the oldest one last
            let messagedisplay= messagelist.slice(0, 3); // Note: To display only 3 messages at a time
            setMessages(messagedisplay);
        })
    }, [])

    return (
        <div className='message-container'>
            {messages.length >0 && messages.map(message=>{
                return(<div className='message-card'>
                    <div className="user-name">{message.name}</div>
                    <div className="user-message">{message.message}</div>
                </div>)
            })}
        </div>
    )
}

export default Messagelist
