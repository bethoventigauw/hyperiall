import React from 'react';
import { Table, Input, Button, Space, Dropdown, Menu, Tag } from 'antd';
import { FilterOutlined, ShareAltOutlined, DownOutlined } from '@ant-design/icons';
import './tableorder.scss'; 

const { Search } = Input;

const data = [
  {
    key: '1',
    customerName: 'Janet Adebayo',
    orderDate: '12 Aug 2022 - 12:25 am',
    orderType: 'Home Delivery',
    trackingId: '9348fj73',
    orderTotal: 'Rp. 95,000.00',
    action: 'Completed',
    status: 'Completed',
  },
  // Add more data as needed
];

const columns = [
  {
    title: 'Customer Name',
    dataIndex: 'customerName',
    key: 'customerName',
    sorter: true,
    filterDropdown: () => (
      <div style={{ padding: 8 }}>
        <Input placeholder="Search Customer" />
      </div>
    ),
  },
  {
    title: 'Order Date',
    dataIndex: 'orderDate',
    key: 'orderDate',
    sorter: true,
  },
  {
    title: 'Order Type',
    dataIndex: 'orderType',
    key: 'orderType',
    sorter: true,
  },
  {
    title: 'Tracking ID',
    dataIndex: 'trackingId',
    key: 'trackingId',
    sorter: true,
  },
  {
    title: 'Order Total',
    dataIndex: 'orderTotal',
    key: 'orderTotal',
    sorter: true,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    sorter: true,
    render: action => (
      <Dropdown overlay={
        <Menu>
          <Menu.Item key="1">Completed</Menu.Item>
          <Menu.Item key="2">In-Progress</Menu.Item>
          <Menu.Item key="3">Pending</Menu.Item>
        </Menu>
      }>
        <Button>
          {action} <DownOutlined />
        </Button>
      </Dropdown>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    sorter: true,
    render: status => {
      let color = 'green';
      if (status === 'Pending') {
        color = 'orange';
      } else if (status === 'In-Progress') {
        color = 'blue';
      }
      return <Tag color={color}>{status}</Tag>;
    },
  },
];

const TableOrder = () => {
  return (
    <div className="customer-orders">
      <div className="header">
        <h2>Customer Orders</h2>
        <Space>
          <Search placeholder="Search" onSearch={value => console.log(value)} style={{ width: 200 }} />
          <Button icon={<FilterOutlined />}>Filter</Button>
          <Button icon={<FilterOutlined />}>Filter</Button>
          <Button icon={<ShareAltOutlined />}>Share</Button>
          <Dropdown overlay={
            <Menu>
              <Menu.Item key="1">Action 1</Menu.Item>
              <Menu.Item key="2">Action 2</Menu.Item>
            </Menu>
          }>
            <Button>
              Bulk Action <DownOutlined />
            </Button>
          </Dropdown>
        </Space>
      </div>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
    </div>
  );
};

export default TableOrder;
