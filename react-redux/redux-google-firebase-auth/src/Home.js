import React from 'react'
import {useSelector} from "react-redux";
import {selectUser} from './features/userSlice'
import {auth} from './firebase-config';


function Home() {
    const user = useSelector(selectUser);

    const handleLogout = () => {
        if(window.confirm("Do you want to sign out?")){
            auth.signOut();
        }
    };




  return (
    <div>
        <div>
            <span>Logged in:</span>
        </div>
        <div>
            <span>ID: {user.id}</span>
        </div>
        <div>
            <span>Name: {String(user.name).split("@")[0]}</span>
        </div>
        <div>
            <span>Verified: {user.verified}</span>
        </div>

        <button onClick={handleLogout}>Logout</button>

        <div>
            <span>Last Login:{user.lastsignIn}</span>
        </div>
    </div>
  )
}

export default Home