import React, { useEffect, useState } from 'react';
import { Input } from '../../Components/Atoms/InputItem/Input';
import { useForm } from '../../hooks/useForm';
import { modalError } from '../../utilities/modals';
import ProductImage from '../../services/ProductImage/ProductImage';
import GetImage from '../../services/GetImage/GetImage';
import { useStore } from '../../hooks/useStore';
import { useNavigate, useParams } from 'react-router-dom';
import '../../pages/pagesStyle.scss';

export const EditProduct = () => {
  
  const productEdit = JSON.parse(localStorage.getItem('productEdit'));

  const [image, setImage] = useState(productEdit?.image || '');
  const [imageUrl, setImageUrl] = useState(productEdit?.image || '');

  const [imageUrlReady, setImageUrlReady] = useState(true);

  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: productEdit?.title,
    description: productEdit?.description,
    price: productEdit?.price,
  })
  

  const updateUrlImage = (imageUrl) => {

   setImageUrl(imageUrl);

  };
  const updateImage = (image) => {
   
    setImage(image);
    

  };

  const { startEditingNewProduct } = useStore()

  const nameForm = /^[A-Z][a-zA-Z\s!@#$%^&*()-_+=<>?]{1,}$/;
  const descriptionForm = /^[A-Z][a-zA-Z\s!@#$%^&*()-_+=<>?]{1,}$/;

  const formValidations = {
    name: [(value) => value.match(nameForm), 'Start with upercase letter and have more than one.'],
    description: [(value) => value.match(descriptionForm), 'Start with upercase letter and have more than one.'],
    price: [(value) => !isNaN(value) && Number(value) >= 90, 'Add a number bigger than 90'],
  }
  const { name, description, price, onInputChange, nameValid, descriptionValid, priceValid } = useForm(formData, formValidations);

  const navigate = useNavigate()

  const handleSubmit = (e) => {

    e.preventDefault();
    if (nameValid === null && descriptionValid === null && priceValid === null) {

      const newProductForm = {
        title: name,
        price: parseInt(price),
        description: description,
        image: imageUrl,
        category: 'Electronic',

      }
      startEditingNewProduct(id, newProductForm, navigate)

    } else {
      modalError('You must complete the form. Add a word with  two or more letters that starts with upercase. Add a number equal or bigger than 90')
    }
  };

  return (

    <form className='new-product-container' style={{ border: '1px solid #e02c1c' }} onSubmit={handleSubmit}>
      <div className='items-container'>
        <h1 className='greeting-heading'>Edit Product</h1>
        <div style={{
          width: '100%', height: '30%', display: 'flex',
          flexDirection: 'column', justifyContent: 'center',
        }}>
          <ProductImage image={image}  />

          <GetImage  updateImage={updateImage} updateUrlImage={updateUrlImage} setImageUrlReady={setImageUrlReady} />
        </div>
        <Input
          type={'text'}
          id={'name'}
          value={name}
          onChange={onInputChange}
          label={'Name'}
          error={''}
          name={'name'}

        />
        <Input
          type={'text'}
          id={'description'}
          value={description}
          onChange={onInputChange}
          label={'Description'}
          error={''}
          name={'description'}
        />

        <Input
          type={'number'}
          id={'price'}
          value={price}
          onChange={onInputChange}
          label={'Price'}
          error={''}
          name={'price'}
        />

        <div className='button-container'>
          <button className='buttonBack' onClick={() => navigate('/products')}> Back </button>
          <button 
          type='submit' 
          disabled={!imageUrlReady} 
          className={imageUrlReady?'button':'buttonDisabled'}
          title={imageUrlReady?'':'The button will be enable when the image is ready'}
          
          >
            {imageUrlReady? 'Submit' : 'Disable'}
          </button>
        </div>
      </div>
    </form>


  );
};
