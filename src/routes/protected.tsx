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
        <div className="flex gap-4">
          <Naviget />

          <Outlet />
        </div>
      </>
    );

  return <Navigate to={to} />;
};

export default Protected;
