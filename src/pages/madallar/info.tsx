import { Button, Input } from 'antd';
import Companies from 'pages/listlar/Companies';
import { FC, useState } from 'react';
import { session } from 'services';
import { IEdit } from './types';
import { Info1 } from 'modules/auth/api';

interface InfoProps {
  data: any;
}

const Info: FC<InfoProps> = ({ data }) => {
  const [formData, setFormData] = useState<IEdit.User>({
    title: data.title || '',
    location: data.location || '',
    phone: data.phone || '',
    number: data.number || ''
  });
  const [infobol, setInfobol] = useState<boolean>(false);
  const id = data._id;
  const saveinput = async () => {
    try {
      const { data } = await Info1(id, formData, session.get());

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
    <div className="mt-2 w-full">
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
      <Button type="primary" onClick={saveinput}>
        Saveinput
      </Button>
    </div>
  );
};

export default Info;
