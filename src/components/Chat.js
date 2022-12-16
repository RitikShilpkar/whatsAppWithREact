// import { Avatar } from '@mui/material'
import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutLined from "@mui/icons-material/SearchOutlined";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import "../Chat.css";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { useStateValue } from "../context/userAuth";

function Chat() {
    const [ {user} , dispatch] = useStateValue();
  const [input, setinput] = useState("");
  const [seed, setseed] = useState("");
  const { roomId } = useParams();
  const [roomName, setroomName] = useState("");
  const [messages, setmessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) =>
          // console.log(snapshot)
          setroomName(snapshot.data().name)
        );

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setmessages(snapshot.docs.map((doc) => doc.data()))
        );
      // console.log(roomName)
    }
  }, [roomId]);

  useEffect(() => {
    // console.log(roomId)
    setseed(Math.floor(Math.random() * 5000));
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    // console.log("first)
  db.collection('rooms').doc(roomId).collection('messages').add({
    message:input,
    name:user.displayName,
    timestamp: new Date()
  })
    setinput("");
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
 
        <div className="chat_headerInfo">
          <h3>{roomName}</h3>
          <p>last seen{" "}
          {
            new Date(
                messages[messages.length -1]?.timestamp?.toDate()
            ).toUTCString()
          }
          </p>
        </div>
        <div className="chat_hraderRight">
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {messages.map((message) => (
          <p className={`chat_message ${message.name === user.displayName && "chat_reciever"}`}>
            <span className="chat_name">{message.name}</span>
            { message.message }
            <span className="chat_timestamp">{ new Date(message.timestamp?.toDate()).toUTCString()}</span>
          </p>
        ))}
        {/* <p className="chat_message chat_reciever">
        hey guys
      </p> */}
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <button onClick={sendMessage} type="submit">
            send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
