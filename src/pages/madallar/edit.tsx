import { Button, Input } from 'antd';
import Companies from 'pages/listlar/Companies';
import { FC, useState } from 'react';
import { session } from 'services';

const app = 'http://137.184.188.134:4000/api';

interface InfoProps {
 
}

const Edit: FC<InfoProps> = () => {
  const [title, setTitle] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [number, setNumber] = useState<string>('');

  const [infobol, setInfobol] = useState<boolean>(false);

  const save = () => {
    let myHeaders = new Headers();
    myHeaders.append('x-auth-token', session.get());
    myHeaders.append('Content-Type', 'application/json');
   
    let raw = JSON.stringify({
      "title": title,
      "location": location,
      "phone": phone,
      "number": number
    });
    
    let requestOptions:any = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`${app}/shops`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        handleEdit();
    })
      .catch(error => console.log('error', error));
  };

  const handleEdit = () => {
    setInfobol(true);
  };

  if (infobol) {
    return <Companies />;
  }

  return (
    <div className="mt-2 flex flex-col gap-3 w-full">
      <Button type="primary" onClick={handleEdit}>
        Next
      </Button>
      <div className="mt-4 flex w-full gap-2">
        <div className="flex w-[200px] flex-col gap-2">
          <p>Joy name</p>
          <Input type="text" value={title} onChange={e => setTitle(e.target.value)} />
          <p>location</p>
          <Input type="text" value={location} onChange={e => setLocation(e.target.value)} />
        </div>
        <div className="flex w-[200px] flex-col gap-2">
          <p>phone</p>
          <Input type="number" value={phone} onChange={e => setPhone(e.target.value)} />
          <p>docon number</p>
          <Input type="number" value={number} onChange={e => setNumber(e.target.value)} />
        </div>
      </div>
      <Button type="primary" onClick={save}>
        Save
      </Button>
    </div>
  );
};

export default Edit;
