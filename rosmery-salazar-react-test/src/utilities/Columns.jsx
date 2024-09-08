import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { deleteData,  readProducts } from './providers';
import { useNavigate } from 'react-router-dom';
import { modalCheck, modalError, modalInfo, modalSuccess } from './modals';
import { useStore } from '../hooks/useStore';


export const Columns = () =>{ 

  const {products} = useStore()

  const navigate = useNavigate()

  const handleDelete = async (id) => { 

    const result = await modalCheck();
    
    if (result.isConfirmed) {
      try {
        await deleteData(id);  
        readProducts();     
        modalSuccess('Deleted!', 'The product has been deleted', 'success');
      } catch (error) {
        
        modalError('Error', 'There was a problema trying to delete the product.', 'error');
      }
    } else {
     
      modalInfo('Canceled', 'The action was canceled.', 'info');
    }
    
  };

  const handleEdit = async(row ) => { 
    const productEdit = await products?.find(item => item.id === row.id);
    localStorage.setItem('productEdit', JSON.stringify(productEdit));   
    navigate(`/products/${row.id}`);
  };
  const handleEditUser = async(row ) => { 
    const productEdit = await products?.find(item => item.id === row.id);
    localStorage.setItem('productEdit', JSON.stringify(productEdit));   
    navigate('/users');
  };
  const handleDetails = async(row) => { 
    localStorage.setItem('productDetails', JSON.stringify(row));   
    navigate(`/details/${row.id}`);
  };
  
 const columns = [ 
 
  { field: 'title', headerName: 'Name', width: 180, sortable: true },
  { field: 'description', headerName: 'Description', width: 250, sortable: true },
  { field: 'category', headerName: 'Category', width: 150, sortable: true },
  { field: 'price', headerName: 'Price ($)',  width: 150, sortable: true ,type: 'number'},
  
  {
    field: 'actions',
    headerName: 'Actions',
    width: 200,
    sortable: false,
    renderCell: (params) => {
      return (
        <>
          <IconButton
            color="primary"
            onClick={() => handleDetails(params.row)}
          >
            <InfoIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => handleEdit(params.row)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      );
    },
  },
];
const columnsUsers = [

  
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'username', headerName: 'Username', width: 150 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 200,
    sortable: false,
    renderCell: (params) => {
      return (
        <>
          
          <IconButton
            color="primary"
            onClick={() => handleEditUser(params.row)}
          >
            <EditIcon />
          </IconButton>
          
        </>
      );
    },
  },
  
];
  return{ columns, columnsUsers};
}

