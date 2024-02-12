import React from 'react';
import { Button, Form, Input, Modal, Popconfirm, Table } from 'antd';
import { useList } from 'modules/shops/hooks';
import { StringParam, useQueryParam } from 'use-query-params';
import { Update, Creat, Delete } from 'modules/shops/api';
import { session } from 'services';

const Shops: React.FC = () => {
  const { isLoading, shops, refetch } = useList();
  const [form] = Form.useForm();
  const [shopId, setShopId] = useQueryParam('shopId', StringParam);

  const saveInput = async (values: any) => {
    try {
      if (shopId === 'new') {
        const { data } = await Creat(values);
        console.log(data);

        setShopId(undefined);
        refetch();
      } else {
        const { data } = await Update(shopId!, values);
        console.log(data);
        setShopId(undefined);
      }
      refetch();
    } catch (error) {
      console.error('Error while saving data:', error);
    }
  };

  const dellet = async (id: any) => {
    try {
      const { data } = await Delete(id);
      console.log(data);

      refetch();
    } catch (error) {
      console.error('Error while saving data:', error);
    }
  };
  return (
    <>
      <div className="flex justify-between">
        <h2>Shops</h2>
        <Button onClick={() => setShopId('new')}>Add</Button>
        <Button onClick={refetch} loading={isLoading}>
          Refetch
        </Button>
      </div>
      <Table
        loading={isLoading}
        dataSource={shops}
        rowKey="id"
        columns={[
          {
            title: 'Title',
            dataIndex: 'title'
          },
          {
            title: 'Location',
            dataIndex: 'location'
          },
          {
            title: 'Phone',
            dataIndex: 'phone'
          },
          {
            title: 'Shop number',
            dataIndex: 'number'
          },
          {
            title: 'Created At',
            dataIndex: 'createdAt'
          },
          {
            title: 'Actions',
            dataIndex: 'id',
            render: id => (
              <Button.Group>
                <Button
                  onClick={() => {
                    setShopId(id);
                    
                  }}
                >
                  Edit
                </Button>

                <Popconfirm
                  title="Delete the shop"
                  description="Are you sure to delete this shop?"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => {console.log(`[DELETE] = ${id}`);
                  dellet(id);
                }}
                >
                  <Button
                    danger
                    type="primary"
                    
                  >
                    Delete
                  </Button>
                </Popconfirm>
              </Button.Group>
            )
          }
        ]}
      />
      <Modal open={!!shopId} className="p-0" footer={null} closeIcon={false} onCancel={() => setShopId(undefined)}>
        <div className="grid w-full place-items-center">
          <Form form={form} onFinish={saveInput}>
            <div className="flex items-center gap-4">
              <div>
                <Form.Item name="title">
                  <Input type="text" placeholder="title" />
                </Form.Item>
                <Form.Item name="location">
                  <Input type="text" placeholder="location" />
                </Form.Item>
              </div>
              <div>
                <Form.Item name="phone">
                  <Input type="text" placeholder="phone" />
                </Form.Item>
                <Form.Item name="number">
                  <Input type="text" placeholder="number" />
                </Form.Item>
              </div>
            </div>
            <Button htmlType="submit">Save</Button>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default Shops;
