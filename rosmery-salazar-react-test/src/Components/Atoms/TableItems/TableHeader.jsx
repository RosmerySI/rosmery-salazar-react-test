import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './products.scss';

export const TableHeader = () => {
  const navigate = useNavigate()
  return (
    <div className='title-create-container'>
        <h1>Products</h1>
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
        <div >
          <Link to='/products/create'>
            <Button
              sx={{
                background: '#e02c1c',
                textTransform: 'none',
                color: 'white',
                "&:hover": {
                  border: "1px solid #e02c1c",
                  color: '#e02c1c',
                  backgroundColor: 'white'
                },
              }}
            >New Product
            </Button>
          </Link>
        </div>
      </div>
  );
};
