import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from "./firebase-config";


const Home = () => {
    const [user, setUser] = useState(null);
    let navigate = useNavigate();    

    useEffect(() => {      
        //setUser(window.sessionStorage.getItem('userProfile'));

        if(sessionStorage.getItem('profile') !== null){
            navigate("/home");
        }else{
            navigate("/");
        }    
        
    }, []);

    const logout = async () => {
        sessionStorage.removeItem("profile");
        await signOut(auth);
        navigate("/");        
      };
    

  return (
    <div>Home
        <div>        
          <div>
            <div>{user?.email} has logged in</div>
            <button onClick={logout}>Logout</button>
          </div>        
      </div>

    </div>
  )
}

export default Home