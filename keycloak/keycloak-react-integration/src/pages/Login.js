import React, {useCallback, useEffect} from 'react'
import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const currentLocationState = location.state || {
        from: {pathname: '/home'}
    };
    const {keycloak} = useKeycloak();

    useEffect(() => {
      if(keycloak?.authenticated){
          navigate('/home');      }
    }, [keycloak]);
    

    const login = useCallback(() => {
        keycloak?.login()
    }, [keycloak]);

    //if(keycloak?.authenticated) return <Navigate to={currentLocationState?.from} />

  return (
    <div>
        <button type="button" onClick={login}>
            Login
        </button>
    </div>
  )
}

export default Login