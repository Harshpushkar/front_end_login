import React, { useState, useEffect } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const ws = new WebSocket('ws://127.0.0.1:8000/ws/chat/general/');
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((prev) => [...prev, data.message]);
        };
        return () => ws.close();
    }, []);

    const sendMessage = () => {
        const ws = new WebSocket('ws://127.0.0.1:8000/ws/chat/general/');
        ws.send(JSON.stringify({ message: input }));
        setInput('');
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold">Club Chat</h2>
            <div className="border p-4 h-64 overflow-y-scroll">
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="border p-2 mt-4 w-full"
            />
            <button
                onClick={sendMessage}
                className="bg-blue-500 text-white p-2 mt-2"
            >
                Send
            </button>
        </div>
    );
};

export default Chat;
