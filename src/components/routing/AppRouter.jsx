import React, { Component } from 'react'
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import ClubUsers from '../clubUsers/ClubUsers';
import Dashboard from '../dashboard/Dashboard'
import Login from '../login/Login'
import ProtectedRoute from '../routing/ProtectedRoute'
export default class AppRouter extends React.Component {


    render() {
        return (
            <div>
                <Router>
                    <Switch>
                    <Route exact path='/' component={Login}></Route>
                    <Route exact path='/dashboard' component={Dashboard}></Route>
                    <Route exact path='/users' component={ClubUsers}></Route>
                    <Route path="/*"> <Redirect to="/" /></Route>
                    </Switch>
                </Router>
                
            </div >
        )
    }
}