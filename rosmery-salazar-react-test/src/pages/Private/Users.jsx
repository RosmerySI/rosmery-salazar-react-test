import React, { useEffect, useState } from 'react';
import { useStore } from '../../hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { DataTable } from '../../Components/Atoms/TableItems';
import { Columns } from '../../utilities/Columns';
import { Paper } from '@mui/material';

export const Users = () => {

  const [usersTable ,setUsersTable]= useState([])
  const { users, startGettingUsers } = useStore()
  const {columnsUsers} = Columns();

  useEffect(() => {
    startGettingUsers()
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      setUsersTable(users);
      
    }
  }, [users]);
   
  const navigate = useNavigate()

  return (
    <div style={{width:'60%'}}>
        <div className='title-create-container' style={{marginLeft:'8%'}}>
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
        <Paper style={{ padding: '20px', margin: '20px auto', width: '80%' }}>
        <DataTable paginatedRows={usersTable} columns={columnsUsers} />
        </Paper>
    </div>
  );
};
