import React from 'react';
import './../../styles/components/header.css'
import logo from './../../public/images/logo.png'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

const Header=(props)=>{
	console.log('props in header component:-'+JSON.stringify(props.variables));
    return (
		<div className="header">
			<div className="header1">
				<img
					src={logo}
					onClick={() => {
						console.log('props:-' + JSON.stringify(props));
						props.history.push('/');
					}}
				/>
			</div>
			<div className="header2">
				<h1>Expense Manager Tool</h1>
				
			</div>

			<div className="loggedinuser">
			
			{props.variables.email.length > 0 && (
				<div className="user">
					<i class="fa-border fas fa-user" />
					<span>{props.variables.email.split('@')[0].toUpperCase()}</span>
				</div>
			)}
			</div>
		</div>
	);
}


const mapStateToProps = (state, props) => {
	return {
		variables: state.variables
		}
};

export default withRouter(connect(mapStateToProps)(Header));


