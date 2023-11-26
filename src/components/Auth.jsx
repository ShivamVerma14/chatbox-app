import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import "../styles/Auth.css";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const Auth = ({ setIsAuth }) => {
    const signInWithGoogle = async () => {
        try {
            const userDetails = await signInWithPopup(auth, provider);
            cookies.set("auth-token", userDetails.user.refreshToken);
            setIsAuth(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="auth-container">
            <div className="brand">
                <div className="logo">
                    <h1>ChatBox</h1>
                </div>
                <div className="brand-lines">
                    <p>Chat with your loved ones.</p>
                    <p>Make room and have fun talks.</p>
                </div>
            </div>
            <div className="auth-provider">
                <p>Get started with Google!</p>
                <button onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
        </div>
    );
};

export default Auth;
