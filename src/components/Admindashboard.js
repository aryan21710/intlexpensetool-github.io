import React from 'react';
import './../../styles/components/dashboard.css';

import Header from './Header';

export default class Dashboard extends React.Component {
	render() {
		return (
			<div className="main">
				<div className="dashboard">
					<Header/>
					<p>WELCOME TO THE ADMIN PAGE </p>
				</div>
			</div>
		);
	}
}
