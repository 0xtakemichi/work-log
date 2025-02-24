// src/components/ProtectedRoute.jsx
import { withAuthenticationRequired } from '@auth0/auth0-react';

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

export default ProtectedRoute;