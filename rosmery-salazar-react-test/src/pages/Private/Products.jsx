import React, { useEffect, useState } from 'react';
import { Paper, Button } from '@mui/material';
import { Link} from 'react-router-dom';
import { DataTable, TableSearch, TablePagination } from '../../Components/Atoms/TableItems';
import { TableHeader } from '../../Components/Atoms/TableItems/TableHeader';
import { useServices } from '../../hooks/useServices';
import { Columns } from '../../utilities/Columns'

export const Products = () => {

  const { products, startGettingProducts } = useServices()
  const { columns } = Columns();
  useEffect(() => {
    startGettingProducts()
  }, []);

  const [rows, setRows] = useState([]);
  const [originalRows, setOriginalRows] = useState([]);
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
      setOriginalRows(formattedData); // Guardamos una copia de los datos originales
    } else {
      setRows([]);
    }
  }, [products]);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);

    // Si la barra de búsqueda está vacía, restablecemos los datos originales
    if (searchValue === '') {
      setRows(originalRows); // Volvemos a los datos originales
    } else {
      // Filtramos los datos originales
      const filtered = originalRows.filter(row =>
        row.title.toLowerCase().includes(searchValue)
      );
      setRows(filtered);
    }
  };
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const pageSize = 5;
  const paginatedRows = rows?.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className='products-container'>
      <TableHeader />
      <TableSearch search={search} handleSearch={handleSearch} />
      
      <Paper style={{ padding: '20px', margin: '20px auto', width: '90%' }}>
        <DataTable paginatedRows={paginatedRows} columns={columns} pageSize={pageSize} />
        <TablePagination rows={rows} pageSize={pageSize} page={page} handlePageChange={handlePageChange} />
      </Paper>
    </div>
  );

};
