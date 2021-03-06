import React from 'react'
import MenuComponent from './MenuComponent'
import {Routes, Route} from 'react-router-dom'
import ProtectedComponentAdmin from './ProtectedComponentAdmin'
import ProtectedComponentUser from './ProtectedComponentUser'
import JustList from './JustList'


const ProtectedComponents = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<MenuComponent />} />
        <Route path="/admin" roles={['admin', 'user']} element={<ProtectedComponentAdmin />} />
        <Route path="/user" roles={['user']} element={<ProtectedComponentUser />} />
      </Routes>
    </>
  )
}

export default ProtectedComponents