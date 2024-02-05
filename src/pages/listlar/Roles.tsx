import { FunctionComponent } from 'react';

interface UsersProps {}

const Roles: FunctionComponent<UsersProps> = () => {
  return (
    <div style={{ width: '100%', height: '100%' }} className="flex items-start gap-8 bg-slate-500 p-4 px-6 text-white">
      <h1>Roles</h1>
    </div>
  );
};

export default Roles;
