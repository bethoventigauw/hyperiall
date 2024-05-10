import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Supplier Name',
    dataIndex: 'suppName',
    key: 'suppName',
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Contact Number',
    dataIndex: 'conNumb',
    key: 'conNumb',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'On The Way',
    dataIndex: 'otw',
    key: 'otw',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: type => {
      let color;
      switch (type.toLowerCase()) {
        case 'taking return':
          color = 'green';
          break;
        case 'not taking return':
          color = 'red';
          break;
        default:
          color = 'inherit'; // jika status tidak cocok, gunakan warna default
      }
      return <p style={{ color }}>{type}</p>;
    },
  },
];

const data = [
  {
    key: '1',
    suppName: 'Richard Martin',
    product: 'Sika',
    conNumb: 7687764556,
    email: 'richard@gmail.com',
    type : 'Taking Return',
    otw : 13,
  },
  {
    key: '2',
    suppName: 'Tom Homan',
    product: 'Velux',
    conNumb: 9867545368,
    email: 'tomhoman@gmail.com',
    type : 'Taking Return',
    otw : 8,
  },
  {
    key: '3',
    suppName: 'Timoty Ronald',
    product: 'McLaren',
    conNumb: 3213894932,
    email: 'warnaApaBos?!@gmail.com',
    type : 'Not Taking Return',
    otw : 20,
  },
];

const App = () => 
  <Table columns={columns} dataSource={data} />;
export default App;
