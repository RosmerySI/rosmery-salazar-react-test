import React, { useEffect, useState } from 'react';
import { Input } from '../../Components/Atoms/InputItem/Input.jsx';
import { modalError, modalInfo, modalSuccess } from '../../utilities/modals';
import { ErrorsMessages, SubmitValidation, UpdateValue } from '../../utilities/validations';
import { useNavigate } from 'react-router-dom';
import  {useStore}  from '../../hooks/useStore.js'
import '../pagesStyle.scss';

export const Login = () => {

    const [inputList, setInputList] = useState({
        email: { value: 'rosmery.salazar0507@gmail.com', validationType: 'email', selected: false },
        password: { value: 'Rosmery123.', validationType: 'password', selected: false },
        confirmPassword: { value: 'Rosmery123.', validationType: 'password', selected: false },

    })

    const [errorList, setErrorList] = useState({
        email: { value: false, message: 'The email format is not correct' },
        password: { value: false, message: 'Six to twelve characters containing an uppercase letter, a lowercase letter, a number and a special character' },
        confirmPassword: { value: false, message:'Six to twelve characters containing an uppercase letter, a lowercase letter, a number and a special character' }
    })

    const{startLoginWithEmailPassword} = useStore();

    useEffect(() => {
        ErrorsMessages(inputList, errorList, setErrorList)
    }, [inputList])
    const navigate=useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()

        if (SubmitValidation(inputList, setInputList)) {
            inputList.password.value !== inputList.confirmPassword.value
                ?
                modalError('Passwords must be the same')
                :
                modalSuccess('The data was send')
            const form = {
                email: inputList.email.value,
                password: inputList.password.value
            }
            startLoginWithEmailPassword(form, navigate);
        } else {
            modalInfo('Enter your email and password')
        }
    }
    return (
        <form className='login-container' onSubmit={handleLogin} >
            <div className='items-container'>
                <h1 className='greeting-heading'>Hello</h1>
                <h2 className='greeting-heading'>Log in to your account</h2>
                <Input
                    type={'email'}
                    id={'email'}
                    value={inputList.email.value}
                    onChange={(e) => UpdateValue(e, 'email', inputList, setInputList)}
                    label={'Email:'}
                    error={errorList.email}

                />
                <Input 
                    type={'password'}
                    id={'password'}
                    value={inputList.password.value}
                    onChange={(e) => UpdateValue(e, 'password', inputList, setInputList)}
                    label={'Password:'}
                    error={errorList.password}
                />
                <Input
                    type={'password'}
                    id={'confirmPassword'}
                    value={inputList.confirmPassword.value}
                    onChange={(e) => UpdateValue(e, 'confirmPassword', inputList, setInputList)}
                    label={'Confirm password:'}
                    error={errorList.confirmPassword}
                />
                <div className='button-container'>
                    <button type='submit' className='button'> Log in </button>
                </div>
            </div>
        </form>
    );
};
