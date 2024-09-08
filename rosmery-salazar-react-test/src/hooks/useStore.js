import { useDispatch, useSelector } from "react-redux";
import { modalError } from "../utilities/modals";
import { onLogin } from "../store/authSlice";
import { onAddingNewProduct, onEditingNewProduct } from "../store/newProductSlice";
import { createData, editData, readProducts, readUsers} from "../utilities/providers";
import { onGettingProducts, onGettingUsers } from "../store/productsSlice";



export const useStore = () => {

    const { status} = useSelector((state) => state.auth);
    const { newProduct,newProductEdited } = useSelector((state) => state.newProduct);  
    const { products,users } = useSelector((state) => state.products);  
  
    const dispatch = useDispatch();

    const startLoginWithEmailPassword = async (form, navigate) => {

        const validation = {
            email: 'rosmery.salazar0507@gmail.com',
            password: 'Rosmery123.'
        }


        if (form.email === validation.email && form.password === validation.password) {
            const authData = {
                email: form.email,
                status: 'authenticated',
            };
            localStorage.setItem('authState', JSON.stringify(authData));
            dispatch(onLogin());
            navigate('/products');
        } else {
            let status = error.response?.status;
            let variable = error.response?.data;
            manageError(status, variable);
            modalError('This user does not have authorization')
        }
    }
    

    const startGettingProducts = async () => {
        const results = await readProducts('')                  
        dispatch(onGettingProducts(results));
        
       
    }
    const startGettingUsers = async () => {
        const results = await readUsers('')               
        
        dispatch(onGettingUsers(results));
       
    }

    const startAddingNewProduct = async (form, navigate) => {
        await createData(form)
        dispatch(onAddingNewProduct(form));
        navigate('/products');
    }

    const startEditingNewProduct = async (id,form, navigate) => {
        await editData(id,form)
        dispatch(onEditingNewProduct(form));
        navigate('/products');
        localStorage.removeItem('productEdit');
    }

    const startLogout = (setAuth) => {
        dispatch(onLogout());
        localStorage.clear();
        setAuth(false)
    };

    return {
        //* Propierties
        status,
        users,
        products,
        newProduct,
        newProductEdited,

        //*methods
        startLoginWithEmailPassword,
        startLogout,
        startAddingNewProduct,
        startGettingProducts,
        startGettingUsers,
        startEditingNewProduct

    };


};