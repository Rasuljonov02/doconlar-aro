import React from 'react';

import { Navbar } from 'components';

const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex  items-start gap-8 p-4 px-6">
        <div>Hello Dashboard</div>
        <div>salom</div>
      </div>
    </>
  );
};

export default Dashboard;
