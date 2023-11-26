import "../styles/CreateRoom.css";

const CreateRoom = ({ onCreate, roomRef, signOut }) => {
    return (
        <div className="room">
            <header className="room-page-header">
                <h1>ChatBox</h1>
                <button onClick={signOut}>Sign Out</button>
            </header>
            <div className="room-container">
                <h2>Create or Enter a Room</h2>
                <div className="room-form">
                    <input
                        type="text"
                        ref={roomRef}
                        placeholder="Enter room code"
                    />
                    <button onClick={onCreate}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default CreateRoom;
