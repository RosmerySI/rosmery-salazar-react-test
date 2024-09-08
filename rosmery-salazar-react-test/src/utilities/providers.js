import axios from "axios";

export const readProducts = async () => {  
    
    try {
        const response = await axios.get(`/api/products`);
         
        return response.data;
       
    } catch (error) {
        console.log(error)
    
    }  
    
};
export const readUsers = async () => {  
    
    try {
        const response = await axios.get(`/api/users`);
        console.log(response.data)
        return response.data;
       
    } catch (error) {
        console.log(error)
    
    }  
    
};
export const createData = async (form) => { 
   
    try {
        const response = await axios.post('/api/products',form);
       
        console.log(response)
        
    } catch (error) {
        console.log(error)
    
    }
};
export const editData = async (id,form) => {  
    
    try {
        const response = await axios.put(`/api/products/${id}`, form);
        console.log(response)
        
    } catch (error) {
        console.log(error)
    
    }
};
export const deleteData = async (id) => {  
    
    try {
        const response= await axios.delete(`/api/products/${id}`);
        console.log(response)  
        readProducts();
    
      } catch (error) {
        console.error('Error eliminando el producto:', error);
      }
};