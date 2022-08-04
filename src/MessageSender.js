import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import "./messageSender.css";
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import {auth, db} from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function MessageSender() {
    const [session ] = useAuthState(auth);
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
         const docRef = collection(db,'posts')
        await addDoc(docRef, { 
            message: input,
            timestamp: serverTimestamp(),
            profilePic: session.photoURL,
            username: session.displayName,
            image: imageUrl,
        })

        setInput("");
        setImageUrl("");
    };
  return (
    <div className="messageSender">
        <div className="messageSender_top">
            <Avatar src={session.photoURL} />
            <form>
                <input value={input} onChange={ (e) => setInput(e.target.value)} className="messageSender_input" 
                   placeholder={`What's on your Mind, ${session.displayName}` }/>
                
                <input value={imageUrl} onChange={ (e) => setImageUrl(e.target.value)} type="text" placeholder="Image URL(Optional)" />
                <button onClick={handleSubmit} type="submit">
                    Hidden Button
                </button>
            </form>

        </div>
        
        <div className="messageSender_bottom">
            <div className="messageSender_option">
                <VideocamIcon style={{ color: "red"}} />
                <h3>Live Video</h3>
            </div>
            <div className="messageSender_option">
                <PhotoLibraryIcon style={{ color: "green" }} />
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender_option">
                <InsertEmoticonIcon style={{ color: "orange" }} />
                <h3>Feeling/Activity</h3>    
            </div>

        </div>

    </div>
  )
}

export default MessageSender;
