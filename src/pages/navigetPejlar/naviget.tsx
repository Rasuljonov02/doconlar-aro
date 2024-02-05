import { FC } from 'react';
import { Link } from 'react-router-dom';

interface NavigetProps {}

const Naviget: FC<NavigetProps> = () => {
  return (
    <div style={{ width: '200px', background: 'blue', height: '100vh' }}>
      <div>
        <Link to="/dashboard">
          <p>Dashbord</p>
        </Link>
        <Link to="/dashboard/users">
          <p>Users</p>
        </Link>
        <Link to="/roles">
          <p>Roles</p>
        </Link>
        <Link to="/Companies">
          <p>Companies</p>
        </Link>
      </div>
    </div>
  );
};

export default Naviget;
