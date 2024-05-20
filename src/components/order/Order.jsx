import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Products',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Order Value',
    dataIndex: 'orderValue',
    key: 'orderValue',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Order ID',
    dataIndex: 'orderId',
    key: 'orderId',
  },
  {
    title: 'Expected Delivery',
    dataIndex: 'expectedDelivery',
    key: 'expectedDelivery',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: status => {
      let color;
      switch (status.toLowerCase()) {
        case 'delayed':
          color = 'green';
          break;
        case 'out of delivery':
          color = 'red';
          break;
        case 'confirmed':
          color = 'blue';
          break;
        default:
          color = 'inherit'; // jika status tidak cocok, gunakan warna default
      }
      return <p style={{ color }}>{status}</p>;
    },
  },
];

const data = [
  {
    key: '1',
    product: 'Red Bull',
    orderValue: 'Rp.500.000,00',
    quantity: '10 Packets',
    orderId: 1234,
    expectedDelivery: '20/12/24',
    status: 'Delayed',
  },
  {
    key: '2',
    product: 'Maggi',
    orderValue: 'Rp.40.000,00',
    quantity: '150 Packets',
    orderId: 1111,
    expectedDelivery: '21/12/24',
    status: 'Confirmed',
  },
  {
    key: '3',
    product: 'Bru',
    orderValue: 'Rp.850.000,00',
    quantity: '5 Packets',
    orderId: 2222,
    expectedDelivery: '08/10/24',
    status: 'Out of Delivery',
  },
];

const App = () => 
  <Table columns={columns} dataSource={data} />;
export default App;
