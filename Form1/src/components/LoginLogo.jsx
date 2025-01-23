import React from 'react';
import logoJcsx from '../assets/logoJcsx.svg';

const LoginLogo = () => {
  return (
    <img
      src={logoJcsx}
      alt="JCSx Logo"
      style={{ marginBottom: '29px', filter: 'invert(1)'  }} // Alterando a cor para preto
    />
  );
};

export default LoginLogo;
