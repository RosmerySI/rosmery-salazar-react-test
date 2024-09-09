import { TextField } from '@mui/material';
import {  Button } from '@mui/material';
import { Link} from 'react-router-dom';

export const TableSearch = ({search,handleSearch}) => {
  return (
    <div style={{padding:'20px',width:'93.5%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
    
    <TextField
          label="Search by name"
          variant="outlined"
          fullWidth
          value={search}
          onChange={handleSearch}
          style={{ marginBottom: '20px',width:'50%' }}         
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
        <div  >
          <Link to='/products/create'>
            <Button
              sx={{
                background: '#e02c1c',
                textTransform: 'none',
                color: 'white',
                height:'50px',
                width:'100px',
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
