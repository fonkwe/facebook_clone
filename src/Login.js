import React from 'react'
import "./Login.css";
import { auth, provider, signInWithPopup } from "./firebase";
import { Button } from '@mui/material';
import { useStateValue } from './stateProvider';
import { actionTypes } from "./reducer";
 


function Login() {
  const [state, dispatch] = useStateValue;
    const SignIn = () => {
        // Sign In....
        signInWithPopup(auth, provider)
        .then(result => {console.log(result)
    }).catch((error) => alert(error.message));
    };
  return (
    <div className="login">
        <div className="login_logo">
            <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkyn0UvdEcVoebBLOzGBYlWYzGu8Z9tkT_2YBCgIu4blaumgD_MKIrSpOKCrSPyXdK70&usqp=CAU" alt="" />
        </div>
        <Button type="submit" onClick={SignIn}> Sign In</Button>
    </div>
  )
}

export default Login;