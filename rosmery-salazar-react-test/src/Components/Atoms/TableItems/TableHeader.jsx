import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useServices } from '../../../hooks/useServices';
import './products.scss';

export const TableHeader = () => {
  const navigate = useNavigate()
  const {startLogout} = useServices()
  const handleLogout = () =>{
    startLogout()
  }
  return (
    <div className='title-create-container'>
      <div style={{display:'flex',flexDirection:'rows'}}>
        <button onClick={handleLogout} className='button' 
        style={{height:'40px',marginRight:'5px', fontSize:'16px'}}>Log Out</button>
        <h1>Products</h1>
        </div>
        <button
          style={{
            height: '50px',
            width: '100px',
            border: '1px solid #e02c1c',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '18px',
            backgroundColor:'white'
          }}
          onClick={() => navigate('/users')}>
          Users
        </button>
       
      </div>
  );
};
