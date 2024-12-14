import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';

const dashboardLayout = () => {
  const {user } = useSelector((state) => state.auth);
  if (!user) {
    return <Navigate to="/login" replace />
  }

  const renderDashboard = () => {
    switch (user?.role) {
      case 'admin':
        return <AdminDashboard/>;
      case 'user':
        return <UserDashboard/>;
      default:
        return <Navigate to="/login" replace />;
    }
  }

  return (
    <div className='container mx-auto flex flex-col md:flex-row gap-4 items-start justify-start h-screen'>
      <header className='lg:w-1/5 sm:w-2/5 w-full h-full border'>
        {renderDashboard()}
      </header>
      <main className='p-8 bg-white w-full h-full flex-grow border mt-0'>
        <Outlet />
      </main>
    </div>
  );
  
}

export default dashboardLayout
