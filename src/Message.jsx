import React, { Component } from 'react';

function Message(props) {

    const {data} = props
    
    function buildImgs(imgArray) {
        const renderArray = []
        imgArray.forEach((img) => {
            renderArray.push(<img className='message-image' alt='user-image' src={img}/>)
        })
        return renderArray;
    }

    switch(data.type) {
        case 'message':
            return (
                <div className="message">
                <span className="message-username" style={{color: props.data.color}}>{props.data.username}</span>
                <span className="message-content">{props.data.content}
                {buildImgs(props.data.imgs)}
                </span>
                </div>
            )
            break;

        case 'notification':
            return (
                <div className="notification">
                <span className="notification-content">{props.data.content}</span>
                </div>
            )
            break;  
    }
    return (
        <div className="notification">
        <span className="notification-content">unknown message from server</span>
        </div>
    )
}

export default Message;