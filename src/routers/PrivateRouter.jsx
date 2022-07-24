import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRouter = function ({ component }) {
  const { currentUser } = useAuth();
  return (
    currentUser ? component : <Navigate to="/" />
  );
};

export default PrivateRouter;