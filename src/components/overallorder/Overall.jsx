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
            <div className="content-wrapper">
                    <div className="content-column">
                        <p>32</p>
                        <p>Last 7 Days</p>
                    </div>
                    <div className="content-column">
                        <p>Rp.250.000</p>
                        <p>Revenue</p>
                    </div>
                </div>
            </Card>
            </Col>
            <Col span={6}>
            <Card title="Total Returned" bordered={false}>
            <div className="content-wrapper">
                    <div className="content-column">
                        <p>5</p>
                        <p>Last 7 Days</p>
                    </div>
                    <div className="content-column">
                        <p>Rp.25000</p>
                        <p>Cost</p>
                    </div>
                </div>
            </Card>
            </Col>
            <Col span={6}>
            <Card title="On The Way" bordered={false}>
            <div className="content-wrapper">
                    <div className="content-column">
                        <p>12</p>
                        <p>Last 7 Days</p>
                    </div>
                    <div className="content-column">
                        <p>Rp.15000</p>
                        <p>Cost</p>
                    </div>
                </div>
            </Card>
            </Col>
        </Row>
    </div>
);
export default Overall;