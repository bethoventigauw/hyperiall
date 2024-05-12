import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, DatePicker } from 'antd';
import './AddPOrderForm.css'

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

const AddProductForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Add Product"
      okText="Add"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="product"
          label="Product"
          rules={[{ required: true, message: 'Please input the product!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="orderValue"
          label="Order Value"
          rules={[{ required: true, message: 'Please input the order value!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[{ required: true, message: 'Please input the quantity!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="orderId"
          label="Order ID"
          rules={[{ required: true, message: 'Please input the order ID!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="expectedDelivery"
          label="Expected Delivery"
          rules={[{ required: true, message: 'Please input the expected delivery date!' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const AddPOrderForm = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);

  const onCreate = values => {
    setData([
      ...data,
      {
        key: (data.length + 1).toString(),
        ...values,
      },
    ]);
    setVisible(false);
  };

  return (
    <div>
      <Button
        onClick={() => {
          setVisible(true);
        }}
        type="primary"
        style={{ marginBottom: 16 }}
      >
        Add Product
      </Button>
      <AddProductForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default AddPOrderForm;
