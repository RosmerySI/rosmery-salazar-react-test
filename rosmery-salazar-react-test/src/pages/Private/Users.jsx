import React, { useEffect, useState } from 'react';
import { useStore } from '../../hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { DataTable } from '../../Components/Atoms/TableItems';
import { Columns } from '../../utilities/Columns';
import { Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const Users = () => {

  const [usersTable ,setUsersTable]= useState([])
  const { users, startGettingUsers } = useStore()
 
 
  const {columnsUsers} = Columns(setUsersTable);

  useEffect(() => {
    startGettingUsers()
  }, []);
 
  useEffect(() => {
    if (users.length > 0) {
      setUsersTable(users);
      
    }
  }, [users]);

  const handleCellEditCommit = (params) => {
    
    const updatedRows = usersTable.map((user) => {
      if (user.id === params.id) {
        return { ...user, [params.field]: params.value };
      }
     
      return user;
    });
    setUsersTable(updatedRows);
  };
   
  const navigate = useNavigate()

  return (
    <div className='products-container' >
        <div className='title-create-container' >
        <h1>Users</h1>
        <button
          style={{
            height: '50px',
            width: '100px',
            border: '1px solid #e02c1c',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '18px'
          }}
          onClick={() => navigate('/products')}>
          Back
        </button>
        </div>
        <Paper style={{ padding: '20px', margin: '20px auto', width: '90%' }}>
       
        <DataGrid
          rows={usersTable} 
          columns={columnsUsers} 
          pageSize={5} 
          onCellEditCommit={handleCellEditCommit}
        />
      
      
        </Paper>
    </div>
  );
};
