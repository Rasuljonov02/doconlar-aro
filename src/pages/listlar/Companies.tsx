import { Button, Table } from 'antd';
import { useFetch } from 'pages/useFetch/useFetch';
import { FunctionComponent, useState } from 'react';

import plus from '../../img/plus.svg';
import Info from 'pages/madallar/info';
interface UsersProps {}

const Companies: FunctionComponent<UsersProps> = () => {
  const { data = [], isLoading, isFetching, refetch } = useFetch({ url: '/shops' });
  const [infi, setInfi] = useState<any>(null);
  const [infobol, infobolean] = useState<boolean>(false);

  const handleEdit = (record: any) => {
    setInfi(record);
    infobolean(true);
    console.log('Edit', record);
  };

  const handleDelete = (record: any) => {
    console.log('Delete', record);
  };

  if(infobol){
    return <Info data={infi}/>
  }

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
          { title: 'Shop Number', dataIndex: 'number' },
          {
            title: 'Actions',
            render: (i, record) => (
              <div className='flex items-center gap-2'>
                <Button type="primary" onClick={() => handleEdit(record)}>
                  Edit
                </Button>
                <Button type="primary" onClick={() => handleDelete(record)}>
                  Delete
                </Button>
              </div>
            )
          }
        ]}
      />
    </div>
  );
};

export default Companies;
