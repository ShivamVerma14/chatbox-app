import {
    addDoc,
    collection,
    onSnapshot,
    query,
    serverTimestamp,
    where,
    orderBy,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";

import Message from "./Message";
import "../styles/Chat.css";

const Chat = ({ room, signOut }) => {
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const messagesRef = collection(db, "messages");

    useEffect(() => {
        const queryMessages = query(
            messagesRef,
            where("room", "==", room),
            orderBy("createdAt")
        );
        const unsubscribe = onSnapshot(queryMessages, snapshot => {
            let messages = [];

            snapshot.forEach(doc => {
                messages.push({ ...doc.data(), id: doc.id });
            });

            setMessages(messages);
        });

        return () => unsubscribe();
    }, []);

    const handleSubmit = async event => {
        event.preventDefault();

        if (newMessage === "") return;

        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        });

        setNewMessage("");
    };

    return (
        <div className="message-chat-container">
            <header className="header">
                <h1>ChatBox</h1>
                <p>Room: {room}</p>
                <button onClick={signOut}>Sign Out</button>
            </header>
            <div className="chats">
                {messages.map(msg => (
                    <Message key={msg.id} msg={msg} />
                ))}
            </div>
            <form onSubmit={handleSubmit} className="message-form">
                <input
                    type="text"
                    className="message-input"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={event => setNewMessage(event.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chat;
