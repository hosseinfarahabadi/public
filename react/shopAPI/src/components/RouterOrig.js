import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Shop from './Shop';
import App from './App';
import NotFound from './NotFound';


class RouterOrig extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ Shop }/>
                    <Route path='/shop/:shopId' component={ App }/>
                    <Route  component={ NotFound }/>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default RouterOrig;