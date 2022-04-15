import React from 'react'
import UserService from '../services/UserService'
const MenuComponent = () => {
  return (
    <div>MenuComponent
      <hr />
      <hr />
      <hr />
      <button className="btn btn-lg btn-warning" onClick={() => UserService.doLogin()}>Login</button>
    
    </div>
  )
}

export default MenuComponent