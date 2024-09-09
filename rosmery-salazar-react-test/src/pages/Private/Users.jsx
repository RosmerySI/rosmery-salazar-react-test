import React, { useEffect, useState } from 'react';
import { useServices } from '../../hooks/useServices';
import { useNavigate } from 'react-router-dom';
import { DataTable } from '../../Components/Atoms/TableItems';
import { Columns } from '../../utilities/Columns';
import { Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const Users = () => {

  const [usersTable ,setUsersTable]= useState([])
  const { users, startGettingUsers } = useServices()
 
 
  const {columnsUsers} = Columns(setUsersTable);

  useEffect(() => {
    startGettingUsers()
  }, []);
 
  useEffect(() => {
    if (users.length > 0) {
      setUsersTable(users);
      
    }
  }, [users]);

  
   

  const navigate = useNavigate()

  const [paginationModel, setPaginationModel] = useState({
    page: 0, 
    pageSize: 5, 
  });
 

  return (
    <div className='products-container' style={{width:'60%'}} >
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
        <h2 style={{color:'gray',margin:'0px'}}>The cells are editables</h2>
        <Paper style={{ padding: '20px', margin: '20px auto', width: '90%',height:'70%' }}>
        <DataGrid
        rows={usersTable} 
        columns={columnsUsers} 
        pagination 
        paginationModel={paginationModel} 
        onPaginationModelChange={setPaginationModel} 
        pageSizeOptions={[5, 10, 20]} 
      />
        </Paper>
    </div>
  );
};
