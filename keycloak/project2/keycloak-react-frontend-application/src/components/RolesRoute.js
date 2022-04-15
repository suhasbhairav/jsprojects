import React from 'react'
import NotAllowed from '../../../react-frontend/src/components/NotAllowed'
import UserService from '../../../react-frontend/src/services/UserService'
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types'

const RolesRoute = ({roles, children, ...rest}) => (
  <Route {...rest}>
    {UserService.hasRole(roles) ? children : <NotAllowed />}
  </Route>
);

RolesRoute.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default RolesRoute