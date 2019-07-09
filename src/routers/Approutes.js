
import React from 'react';
import {BrowserRouter, Route, link ,NavLink, Switch} from 'react-router-dom';
import Page404 from '../components/Page404';
import Header from './../components/Header';
import Login from './../components/Login'
import Dashboard from './../components/Dashboard';
import Adminsummarytable from './../components/Adminsummarytable'
import Adminexpensestable from './../components/Adminexpensestable'
import './../../styles/base/index.css'


const Approutes = ()=>{
    return (
		<BrowserRouter>
			<div className="main">
				<Header />
				<Switch>
					<Route path="/" component={Login} exact={true} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/expensestable" component={Adminexpensestable} />
					<Route path="/summarytable" component={Adminsummarytable} />

					<Route component={Page404} />
				</Switch>
			</div>
		</BrowserRouter>
	);
    
}

export default Approutes;


