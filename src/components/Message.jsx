import { auth } from "../firebase";
import "../styles/Message.css";

const Message = ({ msg }) => {
    const className =
        msg.user === auth.currentUser.displayName
            ? "message sent"
            : "message received";

    const dateObject = msg.createdAt.toDate();
    const time = dateObject.toLocaleString("en-us", {
        timezone: "Asia/Kolkata",
    });

    return (
        <div className={className}>
            <div className="message-text">
                <p>{msg.text}</p>
            </div>
            <div className="message-info">
                <p>{msg.user}</p>
                <p>{`${time}`}</p>
            </div>
        </div>
    );
};

export default Message;
