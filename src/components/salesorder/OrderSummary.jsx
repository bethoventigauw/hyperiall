import React, { useState } from 'react';
import { Card as AntCard, Col, Row, Button } from 'antd';
import { ShoppingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import './ordersumary.scss';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  InputAdornment
} from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const Stat = ({ value, label }) => (
  <div className="stat">
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const CardContent = ({ children }) => (
  <div className="card-content">
    {children}
  </div>
);

const CustomCard = ({ title, children }) => (
  <div className="card">
    <div className="card-title">{title}</div>
    <CardContent>
      {children}
    </CardContent>
  </div>
);

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const CardSummary = ({ title, data, icon }) => (
  <Col span={8}>
    <AntCard>
      <Row align="middle" justify="space-between">
        {icon}
        <Typography>{title}</Typography>
      </Row>
      <CardContent>
        {data.map(({ value, label }) => (
          <Stat key={label} value={value} label={label} />
        ))}
      </CardContent>
    </AntCard>
  </Col>
);

CardSummary.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  icon: PropTypes.node.isRequired,
};

const OrderSummary = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [orderType, setOrderType] = useState('');
  const [date, setDate] = useState(new Date());
  const [orderStatus, setOrderStatus] = useState('Pending');
  const [orderNote, setOrderNote] = useState('');
  const [items, setItems] = useState([
    { name: 'Kayu Mahoni', quantity: 20, price: 38500 },
    { name: 'Paku Beton 4cm/kg', quantity: 20, price: 38000 },
  ]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <div className="order-summary-container">
      <Row justify="space-between" align="middle" className="header">
        <Typography variant="h4">Orders Summary</Typography>
        <Button type="primary" onClick={toggleModal}>
          Create a New Order
        </Button>
      </Row>
      <Row gutter={16} className="cards-container">
        <CardSummary
          title="This Week"
          data={[
            { value: '450', label: 'All Orders' },
            { value: '5', label: 'Pending' },
            { value: '320', label: 'Completed' },
          ]}
          icon={<ShoppingOutlined style={{ fontSize: '24px' }} />}
        />
        <CardSummary
          title="This Week"
          data={[
            { value: '30', label: 'Canceled' },
            { value: '20', label: 'Returned' },
            { value: '5', label: 'Damaged' },
          ]}
          icon={<ShoppingOutlined style={{ fontSize: '24px' }} />}
        />
        <CardSummary
          title="This Week"
          data={[
            { value: '20%', label: 'Abandoned Cart' },
            { value: '30', label: 'Customers' },
          ]}
          icon={<ShoppingCartOutlined style={{ fontSize: '24px' }} />}
        />
      </Row>

      <Dialog open={isModalVisible} onClose={toggleModal} fullWidth>
        <DialogTitle>Create New Order</DialogTitle>
        <DialogContent dividers>
          <TextField
            label="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Customer Email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: <InputAdornment position="start">+62</InputAdornment>,
            }}
          />
          <TextField
            label="Payment Type"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Order Type"
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
            fullWidth
            margin="normal"
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Order Date"
              value={date}
              onChange={(newDate) => setDate(newDate)}
              renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
            />
          </LocalizationProvider>
          <TextField
            label="Order Status"
            value={orderStatus}
            onChange={(e) => setOrderStatus(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Order Note"
            value={orderNote}
            onChange={(e) => setOrderNote(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Typography variant="h6" gutterBottom>Items</Typography>
          {items.map((item, index) => (
            <div key={index} style={styles.itemRow}>
              <Typography style={styles.itemName}>{item.name}</Typography>
              <div style={styles.itemQuantity}>
                <IconButton onClick={() => {
                  let newItems = [...items];
                  if (newItems[index].quantity > 0) newItems[index].quantity -= 1;
                  setItems(newItems);
                }}>
                  <RemoveIcon />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton onClick={() => {
                  let newItems = [...items];
                  newItems[index].quantity += 1;
                  setItems(newItems);
                }}>
                  <AddIcon />
                </IconButton>
              </div>
              <Typography>{`Rp. ${item.price * item.quantity}`}</Typography>
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleModal}>Cancel</Button>
          <Button onClick={() => { /* handle order creation */ }}>Create Order</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: 16,
  },
  itemRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemName: {
    flex: 1,
  },
  itemQuantity: {
    display: 'flex',
    alignItems: 'center',
  },
  cardContent: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '20px',
  },
};

export default OrderSummary;
