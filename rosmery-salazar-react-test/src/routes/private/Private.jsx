import React from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';
import { Products } from '../../pages/Private/Products';
import { NewProduct } from '../../pages/Private/NewProduct';
import { Details } from '../../pages/Private/Details';
import { Users } from '../../pages/Private/Users';
import { EditProduct } from '../../pages/Private/EditProduct';

export const  Private = () => {
  
  return (
    <div id='public-container'>
    <Routes>
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<EditProduct/>} />
        <Route path='/products/create' element={<NewProduct/>} />
        <Route path='/details/:id' element={<Details/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/*' element={<Navigate to={'/products'} />} />
    </Routes>
</div>
  );
};
