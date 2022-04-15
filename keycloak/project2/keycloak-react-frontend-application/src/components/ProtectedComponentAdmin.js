import React from 'react'
import UserService from '../services/UserService'
const ProtectedComponentAdmin = () => {
  return (
    <div>ProtectedComponentAdmin

      <button className="btn btn-success navbar-btn navbar-right" style={{ marginRight: 0 }} onClick={() => UserService.doLogout()}>
          Logout
        </button>
    </div>
  )
}

export default ProtectedComponentAdmin