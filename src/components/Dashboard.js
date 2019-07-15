import React from 'react';
import './../../styles/components/dashboard.css';
import Header from './Header';
import Inputcont from './Inputcont';


export default class Dashboard extends React.Component {




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