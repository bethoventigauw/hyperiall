import React from 'react';
import { Card, Col, Row } from 'antd';
import './overall.css'

const Overall = () => (
    <div className='orderCard'>
        <Row gutter={20}>
            <Col span={6}>
            <Card title="Total Order" bordered={false}>
                <div className='totalOrder'>
                    <p>37</p>
                    <p>Last 7 Days</p>
                </div>
            </Card>
            </Col>
            <Col span={6}>
            <Card title="Total Received" bordered={false}>
                <div className='totalReceived'>
                    <p>32</p>
                    <p>Last 7 Days</p>
                </div>
            </Card>
            </Col>
            <Col span={6}>
            <Card title="Total Returned" bordered={false}>
                <div className='totalReturned'>
                    <p>5</p>
                    <p>Last 7 Days</p>
                </div>
            </Card>
            </Col>
            <Col span={6}>
            <Card title="On The Way" bordered={false}>
                <div className='otw'>
                    <p>12</p>
                    <p>Ordered</p>
                </div>
            </Card>
            </Col>
        </Row>
    </div>
);
export default Overall;