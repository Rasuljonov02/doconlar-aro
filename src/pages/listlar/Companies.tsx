import { FunctionComponent } from 'react';

interface UsersProps {}

const Companies: FunctionComponent<UsersProps> = () => {
  return (
    <div className="flex h-full w-full items-start gap-8 bg-slate-500 p-4 px-6 text-white">
    <h1>Companies</h1>
    </div>
  );
};

export default Companies;
