import React, { useEffect } from 'react';

const LoginComponent = ({ onLogin }) => {
  useEffect(() => {
    onLogin(); // Exécuter la fonction handleLogin une fois que le composant est monté
  }, [onLogin]);

  return null;
};

export default LoginComponent;