import React from "react";
// src/components/LoginButton.jsx
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <button onClick={() => logout()}>
      Cerrar Sesión
    </button>
  ) : (
    <button onClick={() => loginWithRedirect()}>
      Iniciar Sesión
    </button>
  );
};

export default LoginButton;