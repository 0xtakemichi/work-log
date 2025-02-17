import React from "react";
// src/components/LoginButton.jsx
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out flex items-center gap-2" onClick={() => logout()}>
      Cerrar Sesión
    </button>
  ) : (
    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out flex items-center gap-2" onClick={() => loginWithRedirect()}>
      Iniciar Sesión
    </button>
  );
};

export default LoginButton;