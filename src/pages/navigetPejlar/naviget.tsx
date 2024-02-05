import { FC } from 'react';
import { Link } from 'react-router-dom';

interface NavigetProps {}

const Naviget: FC<NavigetProps> = () => {
  return (
    <div style={{ width: '150px', height: '88vh' }} className=" bg-slate-400 p-6 text-[25px] text-white">
      <div>
        <Link to="/dashboard/home">
          <p>Dashbord</p>
        </Link>
        <Link to="/dashboard/users">
          <p>Users</p>
        </Link>
        <Link to="/dashboard/roles">
          <p>Roles</p>
        </Link>
        <Link to="/dashboard/Companies">
          <p>Companies</p>
        </Link>
      </div>
    </div>
  );
};

export default Naviget;
