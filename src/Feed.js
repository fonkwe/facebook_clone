import React from 'react'
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import { db } from './firebase';
import {useCollection} from 'react-firebase-hooks/firestore'
import { collection, query, where, orderBy, getDoc, } from 'firebase/firestore';

function Feed() {
  // const [posts, setPosts] = useState([]);
    const docRef = collection(db,'posts');
    const querySnapshot = query(docRef, orderBy("timestamp", "desc"));
    const [posts] = useCollection(querySnapshot)
    // getDoc(querySnapshot)
    // .then((snapshot) => 
    // setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data() })))
    // ).catch((error)=> console.error(error));
    // console.log(posts);
  
  
  return (
    <div className="feed">
        <StoryReel />
        <MessageSender />

        { posts?.docs.map((post) => (
          <Post
             key = {post.id}
             id = {post.id}
             data = {post.data()}
          />
          ))
        }
      
    </div>
  );
}
 
export default Feed;