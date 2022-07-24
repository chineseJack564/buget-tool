import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PublicRouter = function ({ component }) {
  const { currentUser } = useAuth();
  return (
    !currentUser ? component : <Navigate to="/create-budget" />
  );
};

export default PublicRouter;
