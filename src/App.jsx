import { useState, useRef } from "react";
import Auth from "./components/Auth";
import Chat from "./components/Chat";
import CreateRoom from "./components/CreateRoom";
import "./App.css";

import { signOut } from "firebase/auth";
import { auth } from "./firebase";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const App = () => {
    const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
    const [room, setRoom] = useState(null);
    const roomRef = useRef(null);

    const signUserOut = async () => {
        await signOut(auth);
        cookies.remove("auth-token");
        setIsAuth(false);
        setRoom(null);
    };

    const createRoom = () => {
        setRoom(roomRef.current.value);
    };

    return (
        <div className="container">
            {isAuth ? (
                room ? (
                    <Chat room={room} signOut={signUserOut} />
                ) : (
                    <CreateRoom
                        onCreate={createRoom}
                        roomRef={roomRef}
                        signOut={signUserOut}
                    />
                )
            ) : (
                <Auth setIsAuth={setIsAuth} />
            )}
        </div>
    );
};

export default App;
