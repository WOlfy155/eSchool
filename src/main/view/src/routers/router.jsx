import React, {createContext, useContext} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Students from "../pages/Students";
import NewStudents from "../pages/newStudent";
import LoginPage from "../pages/loginPage";
import {AuthContext} from "../context";

const Router = () => {

    const {isAuth, setAuth} = useContext(AuthContext);


    return (
        isAuth
            ?
            <BrowserRouter >
                <Switch>
                    <Route path ="/students">
                        <Students/>
                    </Route>
                    <Route path= "/new">
                        <NewStudents/>
                    </Route>
                    <Redirect to = "students"/>
                </Switch>
            </BrowserRouter>
            :
            <BrowserRouter >
                <Switch>
                    <Route path= "/login">
                        <LoginPage/>
                    </Route>
                    <Redirect to = "/login"/>
                </Switch>
            </BrowserRouter>
    );
};

export default Router;