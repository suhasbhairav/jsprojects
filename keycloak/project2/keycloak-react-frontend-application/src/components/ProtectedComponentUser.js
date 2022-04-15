import React from 'react'
import UserService from '../services/UserService'
const ProtectedComponentUser = () => {
  return (
    <div>ProtectedComponentUser

<button className="btn btn-success navbar-btn navbar-right" style={{ marginRight: 0 }} onClick={() => UserService.doLogout()}>
          Logout
        </button>
    </div>
  )
}

export default ProtectedComponentUser