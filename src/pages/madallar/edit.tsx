import { FC, useState } from 'react';
import { Button, Input } from 'antd';
import Companies from 'pages/listlar/Companies';
import { session } from 'services';
import { IEdit } from './types';
import { Edit1 } from 'modules/auth/api';

const Edit: FC = () => {
  const [formData, setFormData] = useState<IEdit.User>({
    title: '',
    location: '',
    phone: '',
    number: ''
  });

  const [infobol, setInfobol] = useState<boolean>(false);

  const save = async () => {
    try {
          const { data } = await Edit1(formData,session.get());
  
      console.log(data);
  
       handleEdit();
    } catch (error) {
       console.error('Error while saving data:', error);
    }
  };

  const handleEdit = () => {
    setInfobol(true);
  };

  if (infobol) {
    return <Companies />;
  }

  return (
    <div className="mt-2 flex w-full flex-col items-start gap-3">
      <Button type="primary" onClick={handleEdit}>
        Next
      </Button>
      <div className="mt-4 flex w-full gap-2">
        <div className="flex w-[200px] flex-col gap-2">
          <p>Joy name</p>
          <Input
            type="text"
            value={formData.title}
            onChange={e => setFormData({ ...formData, title: e.target.value })}
          />
          <p>location</p>
          <Input
            type="text"
            value={formData.location}
            onChange={e => setFormData({ ...formData, location: e.target.value })}
          />
        </div>
        <div className="flex w-[200px] flex-col gap-2">
          <p>phone</p>
          <Input
            type="number"
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
          />
          <p>docon number</p>
          <Input
            type="number"
            value={formData.number}
            onChange={e => setFormData({ ...formData, number: e.target.value })}
          />
        </div>
      </div>
      <Button type="primary" onClick={save}>
        Save
      </Button>
    </div>
  );
};

export default Edit;
