import React from 'react'
import { Outlet } from 'react-router-dom'

const dashboardLayout = () => {
  return (
    <div>
       <Outlet/>
    </div>
  )
}

export default dashboardLayout
