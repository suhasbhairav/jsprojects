/*import React, {useState, useEffect} from 'react';
import axios, {Axios, AxiosInstance} from 'axios';
import { useKeycloak } from '@react-keycloak/web';
import { useRef } from 'react';

const UseAxios = ({baseURL}) => {
    const axiosInstance = useRef();
    const {keycloak, initialized} = useKeycloak();
    const kcToken = keycloak?.token ?? '';

    useEffect(() => {
      axiosInstance.current = axios.create({
          baseURL,
          headers: {
              Authorization: initialized ? `Bearer ${kcToken}`: undefined,
          },
      });

      return () => {
          axiosInstance.current = undefined;
      }
    }, [baseURL, initialized, kcToken]);
    
    return axiosInstance;
}

export default UseAxios;*/