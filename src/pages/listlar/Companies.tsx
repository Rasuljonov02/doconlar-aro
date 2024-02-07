import { Button, Checkbox, Input, Table } from 'antd';
import { useFetch } from 'pages/useFetch/useFetch';
import { FunctionComponent, useState } from 'react';

import plus from '../../img/plus.svg';
import Info from 'pages/madallar/info';
import { session } from 'services';
import Edit from 'pages/madallar/edit';
interface UsersProps {}
const app = 'http://137.184.188.134:4000/api';

const Companies: FunctionComponent<UsersProps> = () => {
  const { data = [], isLoading, isFetching, refetch } = useFetch({ url: '/shops' });
  const [infi, setInfi] = useState<any>(null);
  const [infobol, infobolean] = useState<boolean>(false);
  const [Edit1, setEdit] = useState<boolean>(false);
  const handleEdit = (record: any) => {
    setInfi(record);
    infobolean(true);
    console.log('Edit', record);
  };

  const handleDelete = (record: any) => {
    const token = session.get();

    let requestOptions: any = {
      method: 'DELETE',
      headers: {
        'x-auth-token': token
      }
    };

    fetch(`${app}/shops/${record._id}`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => console.log(result))
      .catch(error => console.error('Error:', error));

    console.log('Delete', record);
  };

  if (infobol) {
    return <Info data={infi} />;
  }
  if (Edit1) {
    return <Edit/>;
  }

  return (
    <div className="container w-full  py-2">
      <div className="flex items-center justify-between rounded-[10px] bg-slate-200 p-2 text-white">
        <div>
        <img onClick={() => setEdit(true)} className="w-[25px] cursor-pointer" src={plus} alt="" />   </div>
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
              <div className="flex items-center gap-2">
                <Button type="primary" onClick={() => handleEdit(record)}>
                  Edit
                </Button>
                <Button
                  type="primary"
                  onClick={() => {
                    handleDelete(record);
                    refetch();
                  }}
                >
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
