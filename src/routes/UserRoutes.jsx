import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../containers/user/Home'
import UserLayout from '../layouts/UserLayout'

function UserRoutes() {
  return (
    <Routes>
        <Route element={<UserLayout />}>
            <Route path='/' element={<Home />} />
        </Route>
    </Routes>
  )
}

export default UserRoutes