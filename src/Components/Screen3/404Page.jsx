import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const NoContentScreen = () => (
  <div className="flex flex-col items-center justify-center h-screen">
     <div className="text-base font-extrabold mb-4">
     <span className="bg-radial text-blue text-Large font-bold">4</span>
    <span className="bg-radial text-purple text-Large font-bold">0</span>
    <span className="bg-radial text-blue text-Large font-bold">4</span>
  </div>
    <div className="text-xl text-gray-dark">Oops.! Page not Found!</div>
    <p className='mb-20 text-sm'>The Page You are Looking for does not exist</p>
    <Link to="/">
      <Button type="primary" size="large" shape="round" className='bg-blue'>
        Back to Home
      </Button>
    </Link>
  </div>
);

export default NoContentScreen;
