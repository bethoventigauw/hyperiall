import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Products',
    dataIndex: 'product',
    key: 'product',
    render: (text) => <a>{text}</a>,
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
  },
];
const data = [
  {
    key: '1',
    product: 'Red Bull',
    orderValue: 'Rp.500.000,00',
    quantity: '10 Packets',
    orderId: 1234,
    expectedDelivery : '11/12/13',
    status: 'Delayed'
  },
];
const App = () => <Table columns={columns} dataSource={data} />;
export default App;