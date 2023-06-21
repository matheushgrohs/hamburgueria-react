import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate, Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const ProtectedRoutes = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  const token = localStorage.getItem('@TOKEN');

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, []);

  return <Outlet/>;
};

export default ProtectedRoutes;
