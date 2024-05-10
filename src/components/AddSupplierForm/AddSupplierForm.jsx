import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import './AddSupplierForm.css';

const { Option } = Select;

const AddSupplierForm = ({ onAdd }) => {
  const [form] = Form.useForm();
  const [type, setType] = useState('Taking Return');

  const onFinish = (values) => {
    onAdd(values);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="Supplier Name"
        name="suppName"
        rules={[{ required: true, message: 'Please input supplier name!' }]}
        className="formItem"
      >
        <Input className="input" />
      </Form.Item>

      <Form.Item
        label="Product"
        name="product"
        rules={[{ required: true, message: 'Please input product!' }]}
        className="formItem"
      >
        <Input className="input" />
      </Form.Item>

      <Form.Item
        label="Contact Number"
        name="conNumb"
        rules={[{ required: true, message: 'Please input contact number!' }]}
        className="formItem"
      >
        <Input type="number" className="input" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input email!' }]}
        className="formItem"
      >
        <Input type="email" className="input" />
      </Form.Item>

      <Form.Item
        label="On The Way"
        name="otw"
        rules={[{ required: true, message: 'Please input on the way!' }]}
        className="formItem"
      >
        <Input type="number" className="input" />
      </Form.Item>

      <Form.Item
        label="Type"
        name="type"
        initialValue="Taking Return"
        className="formItem"
      >
        <Select onChange={(value) => setType(value)} className="select">
          <Option value="Taking Return">Taking Return</Option>
          <Option value="Not Taking Return">Not Taking Return</Option>
        </Select>
      </Form.Item>

      <Form.Item className="submitButton">
        <Button type="primary" htmlType="submit">Add Supplier</Button>
      </Form.Item>
    </Form>
  );
};

export default AddSupplierForm;
