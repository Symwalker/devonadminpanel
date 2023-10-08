import React, { useEffect } from 'react'
import AdminNavbar from '../components/AdminComp/adminNavbar';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const AdminControl = () => {
  const navigate = useNavigate()
useEffect(()=>{
  navigate('/')
})
    return (
        localStorage.getItem("token") ? (
          <>
            <AdminNavbar />
            <Outlet />
          </>
        ) : <Navigate to="/" />
      )
}

export default AdminControl










