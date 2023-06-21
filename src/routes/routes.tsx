import React from 'react'
import { Routes, Route } from "react-router-dom"
import ProductProvider from '../contexts/CartContext'
import DashboardPage from '../pages/DashboardPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ProtectedRoutes from './protectedRoutes'

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
      <Route path="/dashboard" element={
      <ProductProvider>
      <ProtectedRoutes />
        <DashboardPage />
      </ProductProvider>}/>
    </Routes>
  )
}

export default RoutesMain
