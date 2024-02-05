import Naviget from 'pages/navigetPejlar/naviget';
import React from 'react';
import { Navigate, Outlet, To } from 'react-router-dom';

interface ProtectedProps {
  allow: boolean;
  to: To;
}

const Protected: React.FC<ProtectedProps> = ({ allow, to }) => {
  if (allow)
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Naviget />

          <Outlet />
        </div>
      </>
    );

  return <Navigate to={to} />;
};

export default Protected;
