import React from 'react';
import './../../styles/components/login.css';
import axios from 'axios';
import Header from './Header';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			passwd: '',
			loginStatus: '',
		};
	}

	enterCredentials = e => {
		console.log(`E.TARGET.NAME IS CHANGED:- ${e.target.name}`);
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	submitCredentials = e => {
		e.preventDefault();
		// axios
		// 	.post(
		// 		'http://localhost:3000/about',
		// 		{
		// 			user: {
		// 				email: this.state.email,
		// 				passwd: this.state.passwd,
		// 			},
		// 		},

		// 		{ withCredentials: true }
		// 	)
		// 	.then(res => {
		// 		console.log('RESPONSE BACK FROM SERVER:-' + JSON.stringify(res));
		// 	})
		// 	.catch(error => {
		// 		console.log('ERROR OCCURED:-' + error);
		// 	});
		this.setState({
			loginStatus: 'Logged In',
		});
		console.log(JSON.stringify(this.props));
		this.props.history.push('/dashboard')
	};

	render() {
		return (
			<div className="main">
				<div className="login">
					<Header />

					<form onSubmit={this.submitCredentials}>
						<p>Login</p>
						<hr />

						<input
							className="uname"
							placeholder="Enter Username"
							type="email"
							name="email"
							value={this.state.email}
							onChange={this.enterCredentials}
						/>
						<input
							className="passwd"
							placeholder="Enter Password"
							type="password"
							name="passwd"
							value={this.state.passwd}
							onChange={this.enterCredentials}
						/>
						<button className="loginBtn">Login</button>
					</form>
				</div>
			</div>
		);
	}
}
