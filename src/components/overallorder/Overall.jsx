import React from 'react';
import { Card, Col, Row } from 'antd';
import './overall.css'

const Overall = () => (
    <div className='orderCard'>
        <Row gutter={20}>
            <Col span={6}>
            <Card title="Total Order" bordered={false}>
                <div className='totalOrder'>
                    37
                    Last 7 Days
                </div>
            </Card>
            </Col>
            <Col span={6}>
            <Card title="Total Received" bordered={false}>
                <div className='totalReceived'>
                    32
                    Last 7 Days
                </div>
            </Card>
            </Col>
            <Col span={6}>
            <Card title="Total Returned" bordered={false}>
                <div className='totalReturned'>
                    5
                    Last 7 Days
                </div>
            </Card>
            </Col>
            <Col span={6}>
            <Card title="On The Way" bordered={false}>
                <div className='otw'>
                    12
                    Ordered
                </div>
            </Card>
            </Col>
        </Row>
    </div>
);
export default Overall;