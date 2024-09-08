import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import { DataTable, TableSearch, TablePagination } from '../../Components/Atoms/TableItems';
import { TableHeader } from '../../Components/Atoms/TableItems/TableHeader';
import { useStore } from '../../hooks/useStore';
import { Columns } from '../../utilities/Columns'

export const Products = () => {

  const { products, startGettingProducts } = useStore()
  const {columns} = Columns();
  useEffect(() => {
    startGettingProducts()
  }, []);
   
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    if (Array.isArray(products)) {  
      const formattedData = products.map((product, index) => ({
        id: product.id || index,
        title: product.title,
        description: product.description,
        category: product.category,
        price: product.price,
      }));
      setRows(formattedData);
    } else {
      setRows([]); 
    }
  }, [products]);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    const filtered = rows.filter(row =>
      row.title.toLowerCase().includes(searchValue)
    );
    setRows(filtered);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  
  const pageSize = 5;
  const paginatedRows = rows?.slice((page - 1) * pageSize, page * pageSize);  
  
  return (
    <>
      <TableHeader />
      <Paper style={{ padding: '20px', margin: '20px auto', width: '80%' }}>

        <TableSearch search={search} handleSearch={handleSearch} />
        
        <DataTable paginatedRows={paginatedRows} columns={columns} pageSize={pageSize} />

        <TablePagination rows={rows} pageSize={pageSize} page={page} handlePageChange={handlePageChange} />
      </Paper>
    </>
  );

};
