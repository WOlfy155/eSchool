import React , {useState, useEffect} from "react";
import axios from 'axios';
import Students from "./pages/Students";
import './styles/App.css'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import SecondPage from "./pages/secondPage";
import NewStudents from "./pages/newStudent";
import LoginPage from "./pages/loginPage";
import {AuthContext} from "./context";
import Router from "./routers/router";



function App() {

    const [isAuth, setAuth] = useState(false);

    useEffect(()=>{
        if (localStorage.getItem('auth')){
            setAuth(true);
        }
    },[])


  return (
      <AuthContext.Provider value={{
          isAuth,
          setAuth
      }}>
          <Router/>
      </AuthContext.Provider>
  );
}

export default App;
