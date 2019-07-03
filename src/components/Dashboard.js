import React from 'react';
import './../../styles/components/dashboard.css';
import axios from 'axios';
import Header from './Header';

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		
		};
	}

	

	render() {
		return (
			<div className="main">
				<div className="dashboard">
					<Header />

				
				</div>
			</div>
		);
	}
}
