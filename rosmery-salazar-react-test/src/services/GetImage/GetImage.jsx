import React, { useState } from 'react';
import './getImage.scss';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Firebase Storage methods
import { storage } from '../../firebase'; // Import the storage service from Firebase config
import {  modalInfo } from '../../utilities/modals';


function GetImage(props) {

  const [imageUrl, setImageUrl] = useState(null);
  const [uploading, setUploading] = useState(false);


  const myFileField = React.createRef();

  const uploadImage = async (ev) => {
    const file = ev.currentTarget.files[0];
    
    if (file) {    
      props.setImageUrlReady(false)
      modalInfo('Wait, please. The button will be enable when the image is ready to submit')
      setUploading(true);
      const storageRef = ref(storage, `images/${file.name}`); // Crea una referencia en Firebase Storage
      const reader = new FileReader();
      reader.onload = (e) => {
      const base64Image = e.target.result;     
      localStorage.setItem("base64Image", base64Image);
      props.updateImage(base64Image);
      };
      reader.readAsDataURL(file);
    
      try {  
             
        await uploadBytes(storageRef, file);
        const downloadUrl = await getDownloadURL(storageRef);
        setImageUrl(downloadUrl);
        localStorage.setItem('productImage', downloadUrl);      
        props.updateUrlImage(downloadUrl);
      } catch (error) {
        console.error('Error al subir la imagen a Firebase:', error);
      } finally {
        setUploading(false);
        props.setImageUrlReady(true)
      }
      
    }
  };

  return (
    <div className="get-image">
      <label className="get-image__label">
        Add image
        <input
          type="file"
          ref={myFileField}
          className="get-image__upload-field"
          onChange={uploadImage}
        />
      </label>
    </div>
  );
}

export default GetImage;
