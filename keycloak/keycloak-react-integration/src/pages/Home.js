import React, {useCallback, useEffect} from 'react';
import { useKeycloak } from '@react-keycloak/web';
import UseAxios from '../utils/UseAxios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const {keycloak} = useKeycloak();
    const navigate = useNavigate();
    console.log(keycloak);

    useEffect(() => {
      if(!keycloak?.authenticated) navigate('/login');
    }, []);    


    const logout = () => {
        keycloak.logout();
        navigate('/login');
    }

  return (
    <div>
        <div> User is {!keycloak?.authenticated ? 'NOT' : ''} authenticated</div>
        {
            keycloak?.authenticated && (
                <button type="button" onClick={logout}>
                    Logout
                </button>
            )
        }

        {/*<button type="button" onClick={callApi}>
            Call API
    </button>*/}
    </div>
  )
}

export default Home