/*import React from 'react'
import {Route, Navigate, RouteComponentProps} from 'react-router-dom'
import { RouteProps } from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'
import { Component } from 'react'



const PrivateRoute = ({
    component: Component,
    ...rest
}) => {
    const {keycloak} = useKeycloak();

  return (
    <Route
        {...rest}
        render={(props) => keycloak?.authenticated ? (<Component {...props} />) 
        : (<Navigate to={{pathname: '/login', state: {from: props.location},}} />
        
        )}    
    />
  )
}

export default PrivateRoute*/