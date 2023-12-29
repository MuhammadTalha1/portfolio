import React from 'react'

interface MessageProp {
    message: string
}

const Message: React.FC<MessageProp> = ({ message }) => {
    return (
        <div className="mt-4 text-base text-center">
            <div className="text-red-500 italic text-lg">{message}</div>
        </div>
    )
}

export default Message
