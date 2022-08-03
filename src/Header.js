import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';

 function Header() {
    const [{ user },] = useStateValue();
  return (
    <div className="header">
        <div className="header_left">
            <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt =""/>
            <div className="header_input">
               <SearchIcon />
               <input placeHolder="Search Facebook" type="text" />
            </div>
            
        </div>


        <div className="header_center">
            <div className="header_option">
                <HomeIcon fontSize='large'/>
            </div>
            <div className="header_option">
                <FlagIcon fontSize='large'/>
            </div>
            <div className="header_option">
                <SubscriptionsIcon fontSize='large' />
            </div>
            <div className="header_option">
                <StorefrontIcon  fontSize='large'/>
            </div>
            <div className="header_option">
                <SupervisedUserCircleIcon fontSize='large' />
            </div>
        </div>

        <div className="header_right">
            <div className="header_info">
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
            </div>
            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>
        </div>
      
    </div>
  )
}

export default Header;
