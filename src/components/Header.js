import React from 'react';
import './../../styles/components/header.css'
import logo from './../../public/images/logo.png'
import {withRouter} from 'react-router-dom'




const Header=(props)=>{
    return (
		<div>
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
				<div className="user">
					<i class="fa-border fas fa-user" />
					<span>Aryan Sharma</span>
				</div>
			</div>
		</div>
	);
}

export default withRouter(Header);


