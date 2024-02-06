import { Button, Table } from 'antd';
import { useFetch } from 'pages/useFetch/useFetch';
import { FunctionComponent } from 'react';

import plus from '../../img/plus.svg';
interface UsersProps {}

const Companies: FunctionComponent<UsersProps> = () => {
  const { data = [], isLoading, isFetching, refetch } = useFetch({ url: '/shops' });

  return (
    <div className="container w-full  py-2">
      <div className="flex items-center justify-between rounded-[10px] bg-slate-200 p-2 text-white">
        <div>
          <img className="w-[25px] cursor-pointer" src={plus} alt="" />
        </div>
        <div className="">
          <Button onClick={refetch} loading={isFetching} className="">
            Refetch
          </Button>
        </div>
      </div>
      <Table
        className="mt-[20px]"
        dataSource={data}
        rowKey="_id"
        loading={isLoading}
        pagination={false}
        columns={[
          { title: '#', render: (v, r, idx) => idx + 1 },
          { title: 'Title', dataIndex: 'title' },
          { title: 'Location', dataIndex: 'location' },
          { title: 'Phone Number', dataIndex: 'phone' },
          { title: 'Shop Number', dataIndex: 'number' }
        ]}
      />
    </div>
  );
};

export default Companies;
