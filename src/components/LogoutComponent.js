import React, { useEffect } from 'react';

const LogoutComponent = ({ onLogout }) => {
    useEffect(() => {
      onLogout(); // Exécuter la fonction handleLogout une fois que le composant est monté
    }, [onLogout]);
  
    return null;
};

export default LogoutComponent;