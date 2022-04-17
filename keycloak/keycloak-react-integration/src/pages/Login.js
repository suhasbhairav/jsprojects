import React, {useCallback, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

const Login = () => {
    const navigate = useNavigate();
    const {keycloak} = useKeycloak();

    useEffect(() => {
      console.log(JSON.stringify(keycloak));
      if(keycloak?.authenticated){
        //navigate('/home', {replace: true});
        window.location.href ="/home";
      }
    }, []);
    
  
   useEffect(() => {     
     if(keycloak?.authenticated){
       //navigate('/home', {replace: true});
       window.location.href ="/home";
     }
   }, [keycloak]);
   
    const login = useCallback(() => {
        keycloak?.login()
        console.log(keycloak);
    }, [keycloak]);
   
  return (
    <div>
        <button type="button" onClick={login}>
            Login
        </button>
    </div>
  )
}

export default Login