import React, {useContext, useState} from 'react';
import {AuthContext} from "../context";
import axios from "axios";
import classes from '../styles/App.css'

const LoginPage = () => {

    const {isAuth, setAuth} = useContext(AuthContext);
     const [userName, setName] = useState("");
    const [password, setPassword] = useState("");

    const login = event => {
        event.preventDefault();
        axios.get("http://localhost:8080/students/user?username="+userName+"&password="+password).then(res =>{
            if (res.data == true){
                setAuth(true);
                localStorage.setItem('auth','true');
            }
        })
    }

    const handleName = event =>{
        setName(event.target.value);
    }
    const handlePass = event =>{
        setPassword(event.target.value);
    }


    return (
        <div>
            <form  onSubmit={login}>
                <h1>Введите логин и пароль</h1>
                <div className="loginForm">
                    <label for = "loign">Введите логин</label>
                    <input id="loign" type="text" value={userName} onChange={handleName}/>
                    <label for = "password">Введите пароль</label>
                    <input id="password" type="password"  value={password} onChange={handlePass}/>
                    <button style={{marginLeft:"5em", marginTop:"1.5em", width:"4em"}} type="submit" >Войти</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;