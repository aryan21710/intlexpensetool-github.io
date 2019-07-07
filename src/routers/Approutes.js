
import React from 'react';
import {BrowserRouter, Route, link ,NavLink, Switch} from 'react-router-dom';
import Page404 from '../components/Page404';
import Header from './../components/Header';
import Login from './../components/Login'
import Dashboard from './../components/Dashboard';



const Approutes = ()=>{
    return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route path="/" component={Login} exact={true} />
					<Route path="/dashboard" component={Dashboard} />
					<Route component={Page404} />
				</Switch>
			</div>
		</BrowserRouter>
	);
    
}

export default Approutes;


