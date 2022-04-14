import React from 'react'
import NotAllowed from '../../../react-frontend/src/components/NotAllowed'
import UserService from '../../../react-frontend/src/services/UserService'
import {Route} from 'react-router-dom'

const RolesRoute = ({roles, children, ...rest}) => (
  <Route {...rest}>
    {UserService.hasRole(roles) ? children : <NotAllowed />}
  </Route>
)

export default RolesRoute