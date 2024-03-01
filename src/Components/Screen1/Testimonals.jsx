import React from 'react';
import { Card, Col, Row } from 'antd';
import { Rating } from "@material-tailwind/react";

const Testimonals = () => {


return (
    <>
    <div className="text-xl text-center">
  <p className="tightest">Customer Say Some Words</p>
    </div>
    <Row gutter={16} className='mt-5'>
    <Col span={8} >
      <Card title={null} bordered={false} className='hover:dark:bg-gray-dark hover:text-white'>
      <Rating value={0} readonly style={{ display: "flex"}} className='mb-10'/>
      The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
      <br />
      <br />
      <strong>Gragham</strong>
      <p>General Customer</p>
      </Card>
    </Col>
    <Col span={8}>
      <Card title={null}  bordered={false} className='hover:dark:bg-gray-dark hover:text-white'>
        
      <Rating value={0} readonly style={{ display: "flex"}} className='mb-10'/>
      The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
      <br />
      <br />
      <strong>Edward</strong>
      <p>General Customer</p>
      </Card>
    </Col>
    <Col span={8}>
      <Card title={null}  bordered={false} className='hover:dark:bg-gray-dark hover:text-white'>
        
      <Rating value={0} readonly style={{ display: "flex"}} className='mb-10'/>
      The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
      <br />
      <br />
      <strong>Charlote</strong>
      <p>General Customer</p>
      </Card>
    </Col>
  </Row>
    </>
)
  
};

export default Testimonals;