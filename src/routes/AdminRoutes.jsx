import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../containers/admin/Dashboard'
import AdminLayout from '../layouts/AdminLayout'
import Products from '../containers/admin/Products'
import Users from '../containers/admin/Users'

function AdminRoutes() {
  return (
    <Routes>
        <Route element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='products' element={<Products />} />
            <Route path='users' element={<Users />} />
        </Route>
    </Routes>
  )
}

export default AdminRoutes