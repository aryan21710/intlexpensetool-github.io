
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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

				</Switch>
			</div>
		</BrowserRouter>
	);
    
}

export default Approutes;


