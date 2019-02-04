import React from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Home from '../../pages/Home'
import Products from '../../pages/Products'
import PageNotFound from '../../pages/PageNotFound'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/products" component={Products}/>
        <Route path="*" component={PageNotFound}/>
    </Switch>
)

export default Routes
