import React from 'react';
import './../../styles/components/dashboard.css';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';
import Inputcont from './Inputcont';
import {connect} from 'react-redux';


export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);

	}

	

	render() {
		return (
			<div className="main">
				<div className="dashboard">
					<Header username={this.props.email}/>
					<Inputcont/>
				
				</div>
			</div>
		);
	}
}
