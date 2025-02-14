// src/router/AppRouter.jsx
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/dashboard" 
        element={<ProtectedRoute component={Dashboard} />} 
      />
    </Routes>
  );
};

export default AppRouter;