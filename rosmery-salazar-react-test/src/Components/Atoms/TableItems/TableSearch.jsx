import { TextField } from '@mui/material';
import React from 'react';

export const TableSearch = ({search,handleSearch}) => {
  return (
    <TextField
          label="Search electronics"
          variant="outlined"
          fullWidth
          value={search}
          onChange={handleSearch}
          style={{ marginBottom: '20px',width:'93%' }}         
          sx={{           
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'gray', 
              },
              '&:hover fieldset': {               
                borderColor: '#e02c1c', 
              },
              '&.Mui-focused fieldset': {               
                borderColor: '#e02c1c', 
              },
              
             
            
            },
          }}
        />
  );
};
