import { FunctionComponent } from 'react';

interface UsersProps {}

const Users: FunctionComponent<UsersProps> = () => {
  return (
    <div style={{ width: '100%', background: 'red' }} className="flex  items-start gap-8 p-4 px-6">
      <h1>Hello </h1>
    </div>
  );
};

export default Users;
