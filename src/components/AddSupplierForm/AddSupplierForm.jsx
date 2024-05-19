import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Select } from 'antd';
import './AddSupplierForm.css'

const { Option } = Select;

const AddSupplierForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Add Supplier"
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
          name="suppName"
          label="Supplier Name"
          rules={[{ required: true, message: 'Please input the supplier name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="product"
          label="Product"
          rules={[{ required: true, message: 'Please input the product!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="conNumb"
          label="Contact Number"
          rules={[{ required: true, message: 'Please input the contact number!' }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input the email!' }]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          name="type"
          label="Type"
          rules={[{ required: true, message: 'Please select the type!' }]}
        >
          <Select>
            <Option value="Taking Return">Taking Return</Option>
            <Option value="Not Taking Return">Not Taking Return</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="otw"
          label="On The Way"
          rules={[{ required: true, message: 'Please input the on the way!' }]}
        >
          <Input type="number" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

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
  {
    title: 'On The Way',
    dataIndex: 'otw',
    key: 'otw',
  },
];

const AddSupplierFormPage = () => {
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
        Add Supplier
      </Button>
      <AddSupplierForm
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

export default AddSupplierFormPage;
