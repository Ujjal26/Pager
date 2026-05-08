/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import axios from 'axios';

const Form = ({setStatus}) => {
    const [name, setName] = useState(''); // Note: to hold the name
    const [message, setMessage] = useState(''); // Note: to hold the message

    const handleNameChange = (e)=>{ // Note: function to hold the name on form input
        setName(e.target.value);
    }
    const handleMessageChange =(e) =>{ // Note: function to hold the message on form input
        setMessage(e.target.value);
    }
    const handleSubmit=async(e)=>{ // Note: function to submit the form and other validations
        e.preventDefault();

        const formName= name.trim();             // Note: to remove extra spaces
        const formMessage= message.trim();       // Note: to remove extra spaces

        if(formName==='' || formMessage === ''){ // Note: if name or message is empty
            alert('Please enter your name and message !!!');
            return;
        }

        const response = await axios.post ('https://ud-pager-default-rtdb.asia-southeast1.firebasedatabase.app/message.json', // Note: to send data to firebase
            {
                name: name,
                message :message
            }
        )
        setStatus(true);
        setName(''); // Note: to clear the form after each enter
        setMessage(''); // Note: to clear the form after each enter
    }

    return (
        <div className="form-container"> 
            <form>
                <div className="form-header">
                    Send message to Ujjal.
                </div>
                <div className="form-input">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <input type="text" placeholder="FirstName Lastname" onChange={handleNameChange} value={name} />
                </div>
                <div className="form-input">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                    <input type="text" placeholder="Message" onChange={handleMessageChange} value={message} />
                </div>
                <div className="form-btn">
                    <button onClick={handleSubmit}>Send</button>
                </div>
            </form>
        </div>
    )
}

export default Form
