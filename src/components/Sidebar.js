import { Avatar, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutLined from '@mui/icons-material/SearchOutlined'
import React, { useEffect, useState } from "react";
import "../Sidebar.css";
import SidebarChat from "./SidebarChat";
import db from '../firebase'
function Sidebar(props) {
    const [rooms, setrooms] = useState([])
    useEffect(() => {
     const unsubcribe = db.collection('rooms').onSnapshot(snapshot => (
        setrooms(snapshot.docs.map(doc => ({
            id: doc.id,
            data : doc.data(),
        })))
      ))
    //   console.log(props.user)
    return ()=>{
        unsubcribe();
    }
    }, [])
    
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_header">
          <Avatar />
          <p>{props.user.name}</p>
          <div className="sidebar_headerRight">
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
        <div className="sidebar_search">
           {/* <IconButton> */}
           <div className="sidebar_searchContainer">
           <SearchOutLined/>
            <input className="" type="text" placeholder="Search or strat new chat" />

           </div>
            
            {/* </IconButton> */}
        </div>
        <div className="sidebar_chats">
          <SidebarChat addNewChat/>
          {rooms.map(room => (
            <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
