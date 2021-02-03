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
                    <ProtectedRoute exact path='/dashboard' component={Dashboard}></ProtectedRoute>
                    <ProtectedRoute exact path='/users' component={ClubUsers}></ProtectedRoute>
                    <Route path="/*"> <Redirect to="/" /></Route>
                    </Switch>
                </Router>
                
            </div >
        )
    }
}