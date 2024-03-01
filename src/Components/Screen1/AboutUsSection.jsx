import React from 'react'
import styled from 'styled-components'
import {Button} from 'antd';
import { Chip } from "@material-tailwind/react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';

const AboutUs = () => {
  return (
    <AboutAlign>
    <div className='Container mt-10 mb-10'>
    <div className='Image_Section w-96 b-blur h-96'>
    <img
      className="h-max w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
      src="https://img.freepik.com/free-vector/online-chatting-app-cartoon-characters-communicating-internet-gadget-addiction-blogging-posting-modern-digital-technologies-design-element_335657-2655.jpg?w=740&t=st=1692641883~exp=1692642483~hmac=ede3d6eccf26ca2542455ac093228ff3ec9fe0c545e6a959b070bbb35a8c744a"
      alt="nature image"
    />
    </div>
    <div className='Content_Section'>
    <Chip variant="outlined" value="# About Us" className="rounded-lg bg-white w-1/6 p-2" />
<p variant="h5" className='text-xl pb-5'>
  Empowering Business with Saas Technology
</p>

    <p>
      The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
      The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
      The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
      The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.

    </p>
    <div className='List'>
        <ul className='grid grid-cols-2 gap-4 mt-4 mb-4'>
            <li><CheckCircleIcon /> Mistakes to Avoid</li>
            <li><CheckCircleIcon /> Mistakes to Avoid</li>
            <li><CheckCircleIcon /> Mistakes to Avoid</li>
            <li><CheckCircleIcon /> Mistakes to Avoid</li>
        </ul>
    </div>
    <p className='mb-5'>
    The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
    </p>
    <Button className="rounded-full border-2 border-blue-500 text-blue-500 h-10 w-40">
    Discover More <AddIcon />
</Button>   

    </div>
    </div>
    </AboutAlign>
  )
}

export default AboutUs;

const AboutAlign = styled.div`
.Container {
    display:flex;
    align-items:center;
    justify-content: space-between;
}

.Content_Section {
    width: 60%;
}



`
