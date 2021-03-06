import React, { useState } from 'react';
import './Login.css'
import Title from './components/title/title';
import Label from './components/label/label';
import Input from './components/input/input';
/* import Button from '@material-ui/core/Button';
 */

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword]=useState('');
    const [passwordError, setPasswordError]=useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasError, sethasError] = useState(false);


    function handleChange(name, value){
        if(name === 'usuario'){
            setUser(value)
            sethasError(false);
        }else{
            if(value.length<6){  /*  minimo 6 caracteres */
                setPasswordError(true);
                sethasError(false);
            }else{
                setPasswordError(false);
                setPassword(value)
                sethasError(false);
            }
        }
    }
    function ifMatch(param){
        if(param.user.length > 0 && param.password.length > 0){
            if(param.user === 'Santiago' &&param.password==='123456'){
                const{user,password} = param;
                let ac = {user, password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            }else{
                setIsLogin(false);
                sethasError(true);

            }
        }else{
            setIsLogin(false);
            sethasError(true);
        }
    }
    function handleSubmit (){
        let account = {user,password}
        if (account){
           ifMatch (account)
        }
    }

    return(
    <div className='login-container'>
        {isLogin ? 
        <div className='home-container'>
            <h1>Hola  {user}!</h1>
            <label>Login correcto.</label>
        </div>
        :
        <div className='login-content'>
            <Title text='¬°Bienvenido!'/>
            { hasError &&
                    <label className='label-alert'>
                            Su contrase√Īa o usuario son incorrectos,
                            o no existen en nuestra plataforma
                    </label>
            }

            <Label text='Usuario' />
            <Input
                attribute={{
                    id:'usuario',
                    name:'usuario',
                    type: 'text',
                    placeholder: 'Ingrese su usuario'
                }}

                handleChange={handleChange}
            
            />
            <Label text='Contrase√Īa '/>
            <Input  
                attribute={{
                    id:'contrase√Īa',
                    name:'contrase√Īa',
                    type: 'password',
                    placeholder: 'Ingrese su contrase√Īa'
                 }}
        
            handleChange={handleChange}
            param={passwordError}
            />
            {passwordError && 
            <label className='label-error'>
                * Constrase√Īa inv√°lida o incorrecta
            </label>
            }
            <div className='submit-button-container'>
                <button onClick={handleSubmit} className='submit-button' >
                    Ingresar
                </button >
            </div>
        </div>
        } 
    </div>
    )
};

export default Login;
